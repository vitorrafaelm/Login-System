import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs'; 
import crypto from 'crypto'; 

import User from '../models/user';

class UserController {
    async index(req: Request, res: Response) {
        return res.send({ userID: await req.userId });
    }

    async store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { name, email, password } = req.body;

        const userExists = await repository.findOne({
            where: { email }
        });

        if (userExists) {
            return res.sendStatus(409);
        }

        const user = repository.create({
            name,
            email,
            password
        });
        await repository.save(user);
        return res.json(user);
    }

    async updatePassword(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email } = req.body;

        try {
            let user: any; 
            user = await repository.findOne({
                where: { email }
            });

            const transport = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: "", // Add an Email to send emails; 
                    pass: "" // Add a password of an Email to send emails; 
                }
            });

            const newPassowrd = crypto.randomBytes(4).toString('hex'); 
            const password = bcrypt.hashSync(newPassowrd); 

            transport.sendMail({
                from: 'Administrador 028faca78a-8cee8d@inbox.mailtrap.io', 
                to: email, 
                subject: 'Recuperação de senha', 
                text: `Olá, sua nova senha para acessar o sistema é: ${newPassowrd}`
            }).then(
                () => {
                    getRepository(User).update(user, {
                        password: password 
                    }).then(
                        () => res.status(200).json({ message: 'Email sended'})
                    ).catch(
                        () => res.status(404).json({ message: 'User not found'})
                    )
                }
            ).catch(
                () => res.status(404).json({ message: 'Failed to send email'})
            )

        } catch (error) {
            console.log('Error'); 
        }
    }
}

export default new UserController;
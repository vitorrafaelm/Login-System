import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Costumer from '../models/custumer';

class CustumerController {
    async index(req: Request, res: Response) {
        try {
            const repository = getRepository(Costumer);
            
            const costumers = await repository.find({
                take: 50
            });
            
            res.json(costumers).sendStatus(200);
        } catch (error) {
            res.sendStatus(400).json(error); 
        }
    }

    async store(req: Request, res: Response) {
        try {
            const repository = getRepository(Costumer); 
            const { name, lastName, email } = req.body; 

            const costumerExists =  await repository.findOne({
                where: { email }
            }); 
             
            const costumer = repository.create({
                name, 
                lastName, 
                email
            }); 

            await repository.save(costumer); 
            return res.json(costumer).sendStatus(200); 

        } catch (error) {
            return res.sendStatus(400).json({ message: 'Costumer not registered'}); 
        }
    }

    async update() {
        
    }

    async delete() {

    }
}

export default new CustumerController; 
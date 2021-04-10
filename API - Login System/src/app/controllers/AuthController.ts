import { Request, Response } from 'express'; 
import { getRepository } from 'typeorm'; 
import bcrypt from 'bcryptjs'; 
import jtw from 'jsonwebtoken'; 

import User from '../models/user'; 

class UserController {
    async authenricate(req: Request, res: Response){
        const repository = getRepository(User); 
        const { email, password } = req.body; 

        const user = await repository.findOne({
            where: { email }
        }); 

        if(!user){
            return res.sendStatus(401); 
        }

        const isValidPassword = await bcrypt.compare(password, user.password); 

        if(!isValidPassword){
            return res.sendStatus(401); 
        }

        const token = jtw.sign({ id: user.id }, 'secret', { expiresIn: '1d'}); 

        // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
        delete user.password; 

        return res.json({
            user, 
            token
        })
    }
}

export default new UserController; 
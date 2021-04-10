import { Router } from 'express'; 
import UserController from './app/controllers/UserController'; 
import AuthController from './app/controllers/AuthController'; 
import CustumerController from './app/controllers/CustumerController'; 

import authMiddleware from './app/middlewares/authMiddleware';  

const router = Router(); 

router.post('/users', UserController.store); 
router.post('/updatePassword', UserController.updatePassword); 

router.post('/auth', AuthController.authenricate); 
router.get('/users', authMiddleware, UserController.index); 

router.get('/costumers', CustumerController.index); 
router.post('/costumers', CustumerController.store); 

export default router; 
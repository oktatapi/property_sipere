import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import PropertyController from '../controllers/propertyController.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)
router.delete('/users/:id', [verifyToken], UserController.destroy)

router.get('/properties', PropertyController.index);
router.get('/properties/:id', PropertyController.show);
router.post('/properties', PropertyController.store);
router.put('/properties/:id', PropertyController.update);
router.delete('/properties/:id', PropertyController.destroy);

export default router

import express from 'express';
import { UserGetController, UserPostController } from '../controllers/controller.js';

const router = express.Router();
const UserGetControllerInstance = new UserGetController();
const UserPostControllerInstance = new UserPostController();

router.get('/signup', UserGetControllerInstance.getSignUpPage);
router.get('/signin', UserGetControllerInstance.getSignInPage);
router.get('/homepage', UserGetControllerInstance.homePage);
router.get('/signout', UserGetControllerInstance.logoutUser);
router.get('/forgot-password', UserGetControllerInstance.getForgotPassword);
router.get('/change-password', UserGetControllerInstance.getChangePassword);

router.post('/signup', UserPostControllerInstance.createUser);
router.post('/signin', UserPostControllerInstance.signInUser);
router.post('/forgot-password', UserPostControllerInstance.forgotPassword);
router.post('/change-password', UserPostControllerInstance.changePassword);

export default router;
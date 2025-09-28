import passport from 'passport';
import express from 'express';
import { googleSignInController } from '../controllers/authController.js';
import dotenv from 'dotenv';

dotenv.config();

const authRouter = express.Router();
const googleSignIn = new googleSignInController();

authRouter.get("/google/login/success", googleSignIn.signInSuccess);
authRouter.get("/google/login/failed", googleSignIn.signInFailed);

authRouter.get("/google", passport.authenticate('google', { scope: ['email', 'profile'] }));
authRouter.get("/google/callback",
    passport.authenticate("google", {
        successRedirect: "login/success",
        failureRedirect: "login/failed"
    })
);

export default authRouter;
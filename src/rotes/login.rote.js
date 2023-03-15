import { Router } from 'express';
import { validateSchema } from '../middleware/validationShema.js';
import { postSignUp, postSignIn } from '../controller/login.controller.js';
import { signInSchema, signUpSchema } from '../schema/login.schema.js';

const login = Router();

login.post('/signup', validateSchema(signUpSchema), postSignUp);
login.post('/signin', validateSchema(signInSchema), postSignIn);

export default login;
import { Router } from 'express';
import { validationToken } from '../validation/validationToken.js';
import { getUser } from '../controller/users.controller.js';

const users = Router();

users.get('/users/me', validationToken, getUser);

export default users;
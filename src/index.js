import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import users from './rotes/users.rote.js'
import login from './rotes/login.rote.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use([users, login]);

app.listen(process.env.PORT || 5000, () =>
    console.log(`port: ${process.env.PORT}`)
);
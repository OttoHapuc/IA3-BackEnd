import { dataBase } from '../config/app.js';

export async function getUser(req, res) {
    const userExist = res.locals.userExist;
    try {
        const userInfo = await dataBase.query(`
        
        `, [userExist.id]);

        return res.send("OK")
    } catch (error) {
        res.status(500).send(error.message);
    }
}
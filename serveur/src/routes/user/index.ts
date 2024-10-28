import express, { Request, Response } from 'express';
import { user } from '../../types/user/interfacesUser';

import fs from 'fs';
import path from 'path';


const router = express.Router();
const dbFilePath = path.join(__dirname, '../../db/user/db.json');

const readDbFile = (): { user: user[] } => {
    const data = fs.readFileSync(dbFilePath, 'utf-8');
    return JSON.parse(data);
}

router.post('/user/login', (req: Request, res: Response,) => {
    console.log(req.body)
    try {

        const { userName, password } = req.body;
        const db = readDbFile();
        const user = db.user;
        const findUser = user.find((u) => u.email === userName && u.password === password)

        if (findUser) {
            const response = ({ status: true, message: 'Well Done Ma men' })
            console.log(response)
            res.status(200).json(response)
        }
        else {
            res.status(401).json({ status: false, message: 'YOU SUCKING PIECE OF SHIT' });
        }
    }
    catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }

})
router.get('/user', (req: Request, res: Response) => {
    try {
        const db = readDbFile();
        const users: user[] = db.user;
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json({ error: "cheh" });
    }
});

export default router
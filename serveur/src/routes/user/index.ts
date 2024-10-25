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
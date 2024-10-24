import express, { Request, Response } from 'express';
const router = express.Router();


router.get('/user', (req: Request, res: Response) => {
    res.status(200).send('Vous avez demandé les Users, ne quittez pas')
})

export default router
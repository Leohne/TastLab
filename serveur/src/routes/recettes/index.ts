import express, { Request, Response } from 'express';
const router = express.Router();


router.get('/recettes', (req: Request, res: Response) => {
    res.status(200).send('Vous avez demandé les Recettes, ne quittez pas')
})

export default router
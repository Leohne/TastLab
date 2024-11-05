import express, { Request, Response } from 'express';
import db from '../../knex'; // Importez l'instance Knex pour la base de données

const router = express.Router();

// Route pour récupérer toutes les recettes
router.get('/recettes', async (req: Request, res: Response) => {
    try {

        const recettes = await db('recipes').select('*');
        res.json(recettes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur lors de la récupération des recettes');
    }
});

export default router;
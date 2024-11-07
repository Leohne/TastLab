import express, { Request, Response } from 'express';
import db from '../../knex'; // Importez l'instance Knex pour la base de données
import { recetteInfos, etapeRecette } from '../../types/recettes/interfacesRecettes';
const router = express.Router();


router.get('/recettes', async (req: Request, res: Response) => {
    try {

        const recettes: recetteInfos[] = await db<recetteInfos>('recipes').select('*');
        res.json(recettes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur lors de la récupération des recettes');
    }
});
router.get('/recettes/search', async (req: Request, res: Response) => {
    const { searchTerm } = req.query;
    try {
        const recettes: recetteInfos[] = await db<recetteInfos>('recipes')
            .select('*')
            .where('title', 'like', `%${searchTerm}%`)
            .orWhere('description', 'like', `%${searchTerm}%`);
        res.json(recettes);
    } catch (err) {
        console.log(err);
        res.status(500).send('Erreur du serveur lors de la recherche de recettes');
    }
}
)

router.get('/recette/:id', async (req: Request, res: Response) => {
    const reqId = req.params.id
    try {
        const recetteDetails: etapeRecette[] = await db<etapeRecette>('recipe_steps')
            .select('*')
            .where('recipe_id', reqId)
            .orderBy('step_index', 'asc')
        res.json(recetteDetails);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Erreur du serveur lors de la recherche de recettes');
    }
})
export default router;
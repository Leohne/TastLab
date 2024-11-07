import express, { Request, Response } from 'express';
import { fetchRecetteStep, getAllRecettes, searchRecipeByFreeText } from '../../middlewares/recettes';


const router = express.Router();


router.get('/recettes', getAllRecettes)
router.get('/recettes/search', searchRecipeByFreeText)
router.get('/recette/:id', fetchRecetteStep)


export default router;
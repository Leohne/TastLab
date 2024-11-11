import express, { Request, Response } from 'express';
import { fetchRecetteStep, getAllRecettes, searchRecipeByFreeText } from '../../middlewares/recettes';
import { validateSearchTerm, validateRecetteId } from '../../middlewares/validation/recettes/index';

const router = express.Router();


router.get('/recettes', getAllRecettes)
router.get('/recettes/search', validateSearchTerm, searchRecipeByFreeText)
router.get('/recette/:id', validateRecetteId, fetchRecetteStep)


export default router;
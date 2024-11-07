import { Request, Response } from "express";
import db from '../../knex'
import { recetteInfos, etapeRecette } from "../../types/recettes/interfacesRecettes";

export const getAllRecettes = async (req: Request, res: Response) => {
    try {
        const recettes: recetteInfos[] = await db<recetteInfos>('recipes').select('*')
        res.json(recettes);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur lors de la récupération des recettes');
    }
}

export const searchRecipeByFreeText = async (req: Request, res: Response) => {
    const { searchTerm } = req.query
    try {
        const recettes: recetteInfos[] = await db<recetteInfos>('recipes').select('*')
            .where('title', 'like', `%${searchTerm}%`)
            .orWhere('description', 'like', `%${searchTerm}%`)
        res.json(recettes)
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur lors de la récupération des recettes');
    }
}

export const fetchRecetteStep = async (req: Request, res: Response) => {
    const reqId = req.params.id;
    try {
        const step: etapeRecette[] = await db<etapeRecette>('recipe_step')
            .select('*')
            .where('recipe_id', reqId)
            .orderBy('step_index', 'asc')
        res.json(step);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur lors de la récupération des recettes');
    }
}
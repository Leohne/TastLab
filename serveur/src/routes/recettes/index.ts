import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { recetteInfos } from '../../types/recettes/interfacesRecettes';

const router = express.Router();

const dbFilePath = path.join(__dirname, '../../db/recettes/db.json');

const readDbFile = (): { recetteInfos: recetteInfos[] } => {
    const data = fs.readFileSync(dbFilePath, 'utf-8');
    return JSON.parse(data);
}

router.get('/recettes/search', (req: Request, res: Response) => {
    const data = readDbFile();
    console.log(data);
    res.json(data.recetteInfos);
});
router.get('/recettes/search', (req: Request, res: Response) => {
    const { freeText, tags } = req.query
    const tagsArray = typeof tags === 'string' ? tags.split(',') : (tags as string[] | undefined);

    const data = readDbFile();
    console.log(data);
    const recettes = data.recetteInfos

    const filteredRecettes = recettes.filter(recette => {
        const matchFreeText = freeText ?
            recette.name.includes(freeText as string) : true;
        const matchTags = tagsArray
            ? tagsArray.every(tag => recette.tags.includes(tag))
            : true;
        return matchFreeText && matchTags

    })
    res.json(filteredRecettes);
})
router.get('/recettes', (req: Request, res: Response) => {
    res.status(200).send('Vous avez demandé les Recettes, ne quittez pas')
})

export default router
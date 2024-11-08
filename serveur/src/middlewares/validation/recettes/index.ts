import { Request, Response, NextFunction } from "express";

export const validateSearchTerm = (req: Request, res: Response, next: NextFunction) => {
    const { searchTerm } = req.query;
    if (!searchTerm) {
        console.log('cheh ! En plein dans ta grosse mouille')
        res.status(400).send('Le paramètre "searchTerm" est requis');
        return
    }
    next();
};

export const validateRecetteId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) {
        console.log('cheh ! En plein dans ta grosse mouille')
        res.status(400).send("L'ID de la recette est requis");
        return
    }
    next();
};
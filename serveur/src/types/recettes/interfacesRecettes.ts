interface recetteInfos {
    id: number;
    title: string;
    redactor_id: number;
    created_at: Date;
    updated_at: Date;

}

interface etapeRecette {
    id: number;
    recipe_id: number;
    step_index: number;
    description: string
}

interface ingredient {
    id: number,
    imgUrl: string,
    name: string
}
interface recetteDetails extends recetteInfos {

    ingredients: ingredient[];
    content: etapeRecette[]
}

export type { etapeRecette, recetteDetails, recetteInfos }
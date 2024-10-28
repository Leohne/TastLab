interface recetteInfos {
    name: string;
    duration: number;
    rating: number;
    RecetteId: string;
    userId: string;
}

interface etapeRecette {
    ingredients: string[];
    duration: number;
    content: string;
    id: string
}

interface recetteDetails extends recetteInfos {
    publisherId: string;
    publicationDate: Date;
    ingredients: string[];
    content: etapeRecette[]
}

export type { etapeRecette, recetteDetails, recetteInfos }
interface recetteInfos {
    name: string;
    recetteId: string;
    userId: string;
    rating: number;
    numberOfVotes: number;
    imgUrl: string;
    publicationDate: Date;
    tags: string[]
}

interface etapeRecette {
    content: string;
    idEtappe: string
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
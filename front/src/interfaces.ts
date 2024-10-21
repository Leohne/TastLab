
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

interface user {
    userId: string;
    email: string;
    userName: string;
    recettesPublied: recetteInfos[];
}

interface loginResponse {
    status: boolean;
    message: string
}

export type { user, recetteInfos, recetteDetails, etapeRecette, loginResponse };
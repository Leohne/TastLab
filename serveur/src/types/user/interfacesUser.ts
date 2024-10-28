import { recetteInfos } from "../recettes/interfacesRecettes";

interface user {
    userId: string;
    email: string;
    userName: string;
    password: string;
    recettesPublied: recetteInfos[];
}

export type { user }
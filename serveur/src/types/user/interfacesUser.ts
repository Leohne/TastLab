import { recetteInfos } from "../recettes/interfacesRecettes";

interface user {
    userId: string;
    email: string;
    userName: string;
    recettesPublied: recetteInfos[];
}
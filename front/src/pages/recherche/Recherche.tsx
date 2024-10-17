import { useState } from "react";
import RecetteView from "../../components/page/recetteview/RecetteView"
import platData from "../../components/page/recetteview/plat.json";



function Recherche () {
    const [isGrid, setisGrid] = useState(true)
    const closeGrid = () => setisGrid(false);
    const openGrid = () => setisGrid(true);
    
    return (
        <div className="flex flex-col content-center mx-auto w-4/5 ">
        <div>
            <p>Recette : {/* length du tableau filtré*/} </p>
        </div>
        <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-start">
                <p className="mr-5">filtre</p>
                <div>icone filtre</div>
            </div>                
            <div className="flex flex-row justify-end">
                <p className="mr-20">Vue :</p>
                <button onClick={openGrid} className="mr-10 w-8"><img src="../public/asset/icone/la-grille.png" alt="btn grille" /></button>
                <button onClick={closeGrid} className="w-8"><img src="../public/asset/icone/liste-a-puces.png" alt="btn liste" /></button>
            </div>
        </div>
        <div className={`flex w-5/5 my-20 ${isGrid ? 'gride' : 'list'}`}>
        <RecetteView plat={platData.plat} /> {/* mapper via server*/}
        </div>
        </div>
    )
}

export default Recherche
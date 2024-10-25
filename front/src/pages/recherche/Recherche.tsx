import { useState } from "react";
import RecetteView from "../../components/page/recetteview/RecetteView"
import platData from "../../components/page/recetteview/plat.json";
import btn_grid from "/asset/icone/la-grille.png";
import btn_list from "/asset/icone/liste-a-puces.png";
import btn_filter from "/asset/icone/filtre.svg";



function Recherche () {
    const [isGrid, setisGrid] = useState(true)
    const closeGrid = () => setisGrid(false);
    const openGrid = () => setisGrid(true);
    
    return (
        <div className="flex flex-col content-center mx-auto w-4/5 bg-white rounded-[16px] p-6 ">
        <div>
            <p className="font-Sugar text-3xl">Recette {/* length du tableau filtré*/} </p>
        </div>
        <div className="flex flex-row justify-between mt-5">
            <div className="flex flex-row justify-start w-3/5">
                <p className="mr-5">filtre :</p>
                <button>
                    <img src={btn_filter} alt="btn_filter" />
                </button>
            </div>                
            <div className="flex flex-row justify-end">
                <p className="mr-10">Vue :</p>
                <button onClick={openGrid} className="mr-10 w-8"><img src={btn_grid} alt="btn_grille"/></button>
                <button onClick={closeGrid} className="w-8"><img src={btn_list} alt="btn_liste"/></button>
            </div>
        </div>
        <div className={`flex w-5/5 my-20 ${isGrid ? 'gride' : 'list'}`}>
        <RecetteView plat={platData.plat} isGrid={isGrid} /> {/* mapper via server*/}
        </div>
        </div>
    )
}

export default Recherche
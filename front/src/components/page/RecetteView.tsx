import imgPlat from "./plat_test.jpg"
function RecetteView () {

    return (
        <div className="w-3/5">
            <div>
                <img src={imgPlat} alt="image plat"className="object-cover" /> {/* A modifier pour voir si on utilise ceci pour le homepage et résultat recherche */}
            </div>
            <div>
                <div>temps</div><div>Note/5</div>
            </div>
        </div>
    )
}

export default RecetteView
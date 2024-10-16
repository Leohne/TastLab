import imgPlat from "./plat_test.jpg"
function RecetteView () {

    return (
        <div>
            <div>
                <img src={imgPlat} alt="image plat" /> {/* A modifier pour voir si on utilise ceci pour le homepage et résultat recherche */}
            </div>
            <div>
                <div>temps</div><div>Note/5</div>
            </div>
        </div>
    )
}

export default RecetteView
import RecetteView from "../../components/page/RecetteView";

function Recherche () {

    return (
        <>
        <div>
            <p>Recette : {/* length du tableau filtré*/} </p>
        </div>
        <div>
            <div>
                <p>filtré</p>
                <div>icone filtre</div>
            </div>                
            <div>
                <p>Vue</p>
                <div>icone carré</div>
                <div>icone horizontal</div>
            </div>
        </div>
        <div>
        <RecetteView/> {/* mapper via server*/}
        </div>
        </>
    )
}

export default Recherche
import RecetteView from "../../components/page/RecetteView"
function Homepages () {

    return (
        <>
        <div>
            <div>
                <h2>Recette à la une</h2>
                <div>
                    <ul>
                        <li>Recette 1</li> {/* mapper via server*/}
                    </ul>
                </div> 
                <RecetteView/> {/*incorpérer les info avec des props*/}
            </div>
            <div>
                <h2>Dernières recettes publiées</h2>
                <div>
                    <ul>
                        <li>Recette 1</li> {/* mapper via server*/}
                    </ul>
                </div>
                <RecetteView/> {/*incorpérer les info avec des props*/} 
            </div>
        </div>
        </>
            
    )
}

export default Homepages
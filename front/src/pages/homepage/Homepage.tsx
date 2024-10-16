import RecetteView from "../../components/page/RecetteView"
function Homepages () {

    return (
        <>
        <div className="flex justify-center">
            <div className="flex py-5 flex-col">
                <div className="flex flex-col">
                    <h2 className="py-2">Recette à la une</h2>
                    <div className="flex flex-row">
                        <div className="pr-3">
                        <ul>
                            <li>Recette 1</li> {/* mapper via server*/}
                            <li>Recette 2</li> {/* mapper via server*/}
                        </ul>
                        </div>
                    <RecetteView/> {/*incorpérer les info avec des props*/}
                    </div> 
                </div>
                <div className="flex py-5 flex-col">
                    <h2 className="py-2">Dernières recettes publiées</h2>
                    <div className="flex justify-end flex-row-reverse">
                        <div className="pl-3">
                        <ul>
                            <li>Recette 1</li> {/* mapper via server*/}
                            <li>Recette 2</li> {/* mapper via server*/}
                        </ul>
                        </div>
                    <RecetteView/> {/*incorpérer les info avec des props*/}
                    </div> 
                </div>
            </div>
        </div>
        </>
            
    )
}

export default Homepages
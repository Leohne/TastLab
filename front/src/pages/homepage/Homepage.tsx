
function Homepages () {

    return (
        <>
        <div className="flex mx-auto w-4/5">
            <div className="flex py-5 flex-col">
                <div className="flex w-5/5 mx-auto flex-col">
                    <h2 className="flex justify-start w-1/2 py-2">Recette à la une</h2>
                    <div className="flex justify-center flex-row">
                        <div className="pr-3">
                        <ul>
                            <li>Recette 1</li> {/* mapper via server*/}
                            <li>Recette 2</li> {/* mapper via server*/}
                        </ul>
                        </div>
                        <img src="../public/asset/img/plat_enzo.webp" alt="img" className="w-1/2" /> {/*incorpérer les info avec des props*/}
                    </div> 
                </div>
                <div className="flex w-4/5 mx-auto flex-col">
                    <h2 className="py-2">Dernières recettes publiées</h2>
                    <div className="flex justify-end flex-row-reverse">
                        <div className="pl-3">
                        <ul>
                            <li>Recette 1</li> {/* mapper via server*/}
                            <li>Recette 2</li> {/* mapper via server*/}
                        </ul>
                        </div>
                        <img src="../public/asset/img/plat_test_bibimbap.webp" alt="img" className="w-1/2" /> {/*incorpérer les info avec des props*/}
                    </div> 
                </div>
            </div>
        </div>
        </>
            
    )
}

export default Homepages
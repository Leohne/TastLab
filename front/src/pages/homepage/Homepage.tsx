import Card_homepage from "../../components/page/card_homepage/Card_hompage";

function Homepages () {

    return (
        <>
        <div className="flex justify-center">
            <div className="flex flex-col py-5 w-4/5 rounded-[16px] bg-white ">
                <div className="flex flex-col w-4/5 mx-auto">
                    <h2 className="font-Sugar text-3xl w-3/5 mx-auto py-12">Recette à la une</h2>
                    <div className="flex justify-center flex-row">
                        <div className="pr-3">
                        <ul>
                            <li>Recette 1</li> {/* mapper via server*/}
                            <li>Recette 2</li> {/* mapper via server*/}
                        </ul>
                        </div>
                        <Card_homepage/>
                    </div> 
                </div>
                <div className="flex w-4/5  mx-auto flex-col pb-12">
                    <h2 className="font-Sugar text-3xl w-3/5 mx-auto pt-20 pb-12">Dernières recettes publiées</h2>
                    <div className="flex justify-center flex-row">
                        <div className="pr-3">
                        <ul>
                            <li>Recette 1</li> {/* mapper via server*/}
                            <li>Recette 2</li> {/* mapper via server*/}
                        </ul>
                        </div>
                       <Card_homepage/>
                    </div> 
                </div>
            </div>
        </div>
        </>
            
    )
}

export default Homepages
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
                        <a href="#" className=" flex justify-start flex-col w-2/5 ">
                        <img src="../public/asset/img/plat_enzo.webp" alt="img" className="w-30 object-cover rounded-t-[16px]" /> {/*incorpérer les info avec des props*/}
                        <div className="bg-[#DCC09B] rounded-b-[16px]">                            
                            <p className="font-Sugar text-2xl pl-2">Plat d Enzo</p>
                            <div className="flex  flex-row pl-2 pb-2">
                                <p className="pr-20">15min</p>
                                <p>02%</p>
                            </div>
                        </div>
                        </a>
                    </div> 
                </div>
                <div className="flex w-4/5  mx-auto flex-col">
                    <h2 className="font-Sugar text-3xl w-3/5 mx-auto pt-20 pb-12">Dernières recettes publiées</h2>
                    <div className="flex justify-center flex-row-reverse">
                        <div className="pl-3">
                        <ul>
                            <li>Recette 1</li> {/* mapper via server*/}
                            <li>Recette 2</li> {/* mapper via server*/}
                        </ul>
                        </div>
                        <a href="#" className="flex justify-end flex-col w-2/5">
                        <img src="../public/asset/img/plat_test_bibimbap.webp" alt="img" className="w-30 object-cover rounded-t-[16px]" /> {/*incorpérer les info avec des props*/}
                        <div className="bg-[#DCC09B] rounded-b-[16px]">                            
                            <p className="font-Sugar text-2xl pl-2">Bibimbap</p>
                            <div className="flex pl-2 pb-2 flex-row">
                                <p className="pr-20">15min</p>
                                <p>86%</p>
                            </div>
                        </div>    
                        </a>
                    </div> 
                </div>
            </div>
        </div>
        </>
            
    )
}

export default Homepages
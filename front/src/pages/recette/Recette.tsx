import bibi from "../../../public/asset/img/plat_test_bibimbap.webp"

function Recette () {
    return (
        <div className="bg-white">
            <div className="flex items-center flex-col" >
                <h2 className="flex justify-center font-Sugar py-10 w-2/4 text-5xl">Bibimbap</h2>
                <div className="flex items-center flex-col">
                    <div className="w-2/4">
                        <img src={bibi} alt="img bibi" className="object-cover w-full h-[400px] rounded-[15px]" />
                    </div>
                    <div className="w-3/4 py-8">
                    <h3 className="flex justify-center pb-5 font-Sugar text-3xl">Présentation</h3>
                    <p>Le bibimbap est un plat coréen composé de riz blanc recouvert de légumes variés, 
                       de viande (souvent du bœuf), d'un œuf et d'une sauce épicée au gochujang. Tous les ingrédients
                       sont mélangés avant d'être dégustés, ce qui combine leurs saveurs et textures pour un repas à la fois équilibré, coloré et savoureux.
                    </p>                        
                    </div>
                    <div className="flex justify-between w-3/4">
                        <article className="w-[25%] rounded-t-[105px] border-solid border-4 border-b-0 border-[#CB9D6C]">
                            <h3 className="flex justify-center font-Sugar text-3xl pt-3">Ingrédients</h3>
                            <ul className="w-3/5 mx-auto py-4">
                                <li>Oeuf</li>
                                <li>Riz</li>
                                <li>Boeuf</li>
                                <li>Pousses de soja</li>
                                <li>Carottes</li>
                                <li>Epinards</li>
                            </ul>                            
                        </article>
                        <article className="w-[60%] rounded-t-[145px] border-solid border-4 border-b-0 border-[#CB9D6C]">
                            <h3 className="flex justify-center font-Sugar text-3xl pt-3">Préparation</h3>
                            <ul className="flex items-center flex-col mx-auto py-4 w-3/4">
                                <li>Cuisson du riz : Commence par cuire du riz blanc (de préférence à grains courts) jusqu'à ce qu'il soit moelleux.</li>
                                <li>Préparation des légumes : Coupe et assaisonne divers légumes comme les pousses de soja, carottes, épinards, courgettes
                                    et champignons. Sautés séparément à la poêle avec un peu d'huile et de sel, ils gardent leur couleur et saveur uniques.</li>
                                <li>Préparation de la viande : Si tu ajoutes de la viande, le bœuf est souvent utilisé. Tranche-le finement, marine-le avec
                                    de la sauce soja, de l’ail, du sucre et un peu d’huile de sésame, puis fais-le sauter.</li>
                                <li>Cuisson de l'œuf : Dans de nombreuses recettes, un œuf frit est placé au centre du plat, mais il peut aussi être servi 
                                    cru (le riz chaud le cuit partiellement lors du mélange).</li>
                                <li>Assemblage : Dans un bol, place une couche de riz, puis dispose les légumes, la viande et l'œuf au-dessus.</li>
                                <li>Ajout de la sauce : Ajoute une cuillerée de gochujang (pâte de piment coréenne) pour relever le plat.</li>
                                <li>Mélange et dégustation : Mélange le tout vigoureusement pour que les saveurs se combinent et savoure !</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recette
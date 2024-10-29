import { Link } from 'react-router-dom';
import timeIcone from "/asset/icone/time.svg"
import star from "/asset/icone/star.svg"

interface plats {
    id:string,
    cover: string,
    image: string,
    nom: string,
    temps:string,
    note: number; 
}

const RecetteView: React.FC<{ plat: plats[]; isGrid: boolean }> = ({ plat, isGrid }) => {
  
    const recetteSearch = plat.map((plats) => {
        return (
                <div className={`flex p-10 ${isGrid ? 'w_grid' : 'w_list'}`} key={plats.id}>
                    <Link to="/recette" /*to={`/receipe/${item.id}`}*/ className={`${isGrid ? '' : 'a_list'}`}>
                    <div className={`${isGrid ? 'cardGrid' : 'cardList'}`}>
                        <div className={`${isGrid ? 'relative' : 'img_list'}`}>
                            <img src={plats.cover} alt="image plat" className='object-cover w-full h-[400px] rounded-[15px]' />
                            <div className={`${isGrid ? 'p_grid' : 'hidden'}`}>
                                <p className='anim_grid'>Le bibimbap est un plat coréen composé de riz blanc recouvert de légumes variés, 
                                   de viande (souvent du bœuf), d'un œuf et d'une sauce épicée au gochujang. Tous les ingrédients
                                   sont mélangés avant d'être dégustés, ce qui combine leurs saveurs et textures pour un repas à la fois équilibré, coloré et savoureux.
                                </p>
                            </div>
                        </div>                        
                        <div className='flex flex-col justify-between w-[60%] pt-auto py-2'>
                            <div className={`font-Sugar text-2xl ${isGrid ? 'text-center' : 'pl-2'}`}>{plats.nom}</div>
                            <div>
                                <p className={`${isGrid ? 'hidden' : 'pl-2'}`}>Le bibimbap est un plat coréen composé de riz blanc recouvert de légumes variés, 
                                   de viande (souvent du bœuf), d'un œuf et d'une sauce épicée au gochujang. Tous les ingrédients
                                   sont mélangés avant d'être dégustés, ce qui combine leurs saveurs et textures pour un repas à la fois équilibré, coloré et savoureux.
                                </p>
                            </div>
                            <div className={`flex ${isGrid ? 'justify-center' : 'justify-start'}`}>
                                <div className="flex flex-row mx-1"> <img src={timeIcone} alt="icone temps" className='mr-2'/> {plats.temps}</div>
                                <div className="flex ml-4">
                                {Array.from({ length: plats.note }, (_, index) => {
                                 return <img key={index} src={star} alt="star rate"/> ;
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
    )})

    return (
        <>
            {recetteSearch}
        </>
    )
}

export default RecetteView
import timeIcone from "/asset/icone/time.svg"
import { Link } from 'react-router-dom';


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
                        <Link to="/recette" /*to={`/receipe/${item.id}`}*/>
                    <div className='cardGrid'>
                        <div className='relative'>
                            <img src="/asset/img/plat_test_bibimbap.webp" alt="image plat" className="object-cover w-full rounded-[15px] h-[400px]"/> {/* a changer img pour list + petit*/}
                            <div className='p_grid'>
                                <p className='anim_grid'>Le bibimbap est un plat coréen composé de riz blanc recouvert de légumes variés, 
                                   de viande (souvent du bœuf), d'un œuf et d'une sauce épicée au gochujang. Tous les ingrédients
                                   sont mélangés avant d'être dégustés, ce qui combine leurs saveurs et textures pour un repas à la fois équilibré, coloré et savoureux.
                                </p>
                            </div>
                        </div>                        
                        <div className='flex flex-col justify-between w-[60%] pt-auto py-2'>
                            <div className='font-Sugar text-2xl text-center'>Bibimbap{/*{plats.nom}*/}</div>
                            <div className={'justify-center'}>
                                <div className="flex flex-row mx-1"> <img src={timeIcone} alt="icone temps" className='mr-2'/>15{/*{plats.temps}*/} min</div>
                                <div className="flex ml-4">
                                {/*{Array.from({ length: plats.note }, (_, index) => {
                                 return <img key={index} src={star} alt="star rate"/> ;
                                })}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
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
                        <Link to="/recette" /*to={`/receipe/${item.id}`}*/>
                    <div className='cardGrid'>
                        <div className='relative'>
                            <img src="/asset/img/plat_test_bibimbap.webp" alt="image plat" className="object-cover w-full rounded-[15px] h-[400px]"/> {/* a changer img pour list + petit*/}
                            <div className='p_grid'>
                                <p className='anim_grid'>Le bibimbap est un plat coréen composé de riz blanc recouvert de légumes variés, 
                                   de viande (souvent du bœuf), d'un œuf et d'une sauce épicée au gochujang. Tous les ingrédients
                                   sont mélangés avant d'être dégustés, ce qui combine leurs saveurs et textures pour un repas à la fois équilibré, coloré et savoureux.
                                </p>
                            </div>
                        </div>                        
                        <div className='flex flex-col justify-between w-[60%] pt-auto py-2'>
                            <div className='font-Sugar text-2xl text-center'>Bibimbap{/*{plats.nom}*/}</div>
                            <div className={'justify-center'}>
                                <div className="flex flex-row mx-1"> <img src={timeIcone} alt="icone temps" className='mr-2'/>15{/*{plats.temps}*/} min</div>
                                <div className="flex ml-4">
                                {/*{Array.from({ length: plats.note }, (_, index) => {
                                 return <img key={index} src={star} alt="star rate"/> ;
                                })}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                    </div> 
                </div>
            </div>
        </div>
        </>
            
    )
}

export default Homepages
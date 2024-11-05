import { Link } from "react-router-dom"
import timeIcone from "/asset/icone/time.svg"

function Card_homepage () {

    return (
        <>
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
        </>
    )
}

export default Card_homepage
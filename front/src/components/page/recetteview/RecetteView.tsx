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
                        <div className={`${isGrid ? 'img_grid' : 'img_list'}`}>
                            <img src={plats.cover} alt="image plat" className='object-cover w-[290px] h-[400px] rounded-[15px]' />
                        </div>                        
                        <div className='flex flex-col justify-between w-[60%] pt-auto py-2'>
                            <div className="font-Sugar pl-2 text-2xl">{plats.nom}</div>
                            <div className="flex justify-start">
                                <div className="flex flex-row mx-1"> <img src={timeIcone} alt="icone temps" className='mr-2' /> {plats.temps}</div>
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

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
        return <div className={`flex w-1/2 p-10 ${isGrid ? 'flex-col' : 'flex-row'}`} key={plats.id}>
                    <div className="flex justify-center w-3/4">
                        <img src={plats.cover} alt="image plat" className="flex justify-center w-15 object-cover" />
                    </div>
                    <div className="font-Sugar w-2/4">{plats.nom}</div>
                    <div className="flex w-2/4 justify-between">
                        <div className=" mx-1">{plats.temps}</div>
                        <div className=" ml-2">{plats.note}/5</div>
                    </div>
                </div>
    })
    return (
        <>
            {recetteSearch}
        </>
    )
}

export default RecetteView
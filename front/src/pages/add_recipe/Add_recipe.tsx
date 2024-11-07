import img_empty from "/asset/icone/img_empty2.jpg"

function Add_recipe () {
    return (
        <div className="flex">
            <form action="submit" className="flex flex-col mx-auto">
                <label htmlFor="title">Titre</label>
                <input aria-label="text pour le titre" type="text" id="title" />
                <label htmlFor="img_upload">Image de présentation
                <img src={img_empty} alt="ajout d'image" />
                </label>
                <input aria-label="ajout image" type="file" id="img_upload" className="opacity-0" />
            </form>
        </div>        
    )
}

export default Add_recipe
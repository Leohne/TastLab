import { useState } from "react";
import img_icone from "/asset/icone/img_empty2.jpg"

function Step_recipe( {onClose} ) {

   /* const [imgSrc, setimgSrc] = useState<string | null>(null);
    const prevision = useRef<HTMLDivElement>(null);

    const readUrl = (e: React.ChangeEvent<HTMLInputElement>) => {

        const files = e.target.files;
        if (files && files.length > 0) {
          const [picture] = files;
          if (picture) {
            const reader = new FileReader();
            reader.onload = (event) => {
              if (prevision.current && event.target) {
                setimgSrc(event.target.result as string);
              }
            };    
            reader.readAsDataURL(picture);
          }
        }
      };*/

    return (
        <div>
            <h2>Salut grosse pute !!</h2>
        </div>
        /*
        <div className="flex">
            <form action="submit" method="post" className="flex flex-col mx-auto w-2/4">
                <label htmlFor="title">Titre</label>
                <input aria-label="text pour le titre" type="text" id="title" />
                <label htmlFor="img_upload">Image de présentation
                <div ref={prevision} className="w-4/5" >
                {imgSrc ? (
                    <img src={imgSrc} alt="Prévisualisation" className="object-cover w-full h-[400px]"/>
                ) : (
                    <img src={img_icone} alt="Prévisualisation" className="object-cover w-full h-[400px]"/>
                )}
                </div>
                </label>
                <input aria-label="ajout image" type="file" id="img_upload" onChange={readUrl} className="opacity-0" />
                <button>Ajouter</button>

            </form>
        </div>       
         */ 
   )
}

export default Step_recipe
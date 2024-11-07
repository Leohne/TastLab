import { useRef, useState } from "react";
import img_icone from "/asset/icone/img_empty2.jpg"
import Step_recipe from "../../components/page/step_recipe/Step_recipe";

function Add_recipe () {

    const prevision = useRef<HTMLDivElement>(null);
    const [imgSrc, setimgSrc] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(false)
     
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
      };

    return (
        <div className="flex flex-col">
            <form method="post" className="flex flex-col mx-auto w-2/4">
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
            </form>
                <button>Ajoutez une étape</button>
                <div>
                {isExpanded && <Step_recipe onClose={() => setIsExpanded(false)}/>}
                </div> 
            <button type="submit">Envoyer</button>
        </div>        
    )
}

export default Add_recipe
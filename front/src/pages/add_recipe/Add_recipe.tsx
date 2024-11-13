import { useRef, useState } from "react";
import img_icone from "/asset/icone/img_empty2.jpg"
import Step_recipe from "../../components/page/step_recipe/Step_recipe";

interface Step {
  title: string;
  image: string | null;
  paragraphs: string[];
  ingredient: string[]
}

function Add_recipe () {

    const prevision = useRef<HTMLDivElement>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [steps, setSteps] = useState<Step[]>([]);
     
    //Visualiser img choisi
    const readUrl = (e: React.ChangeEvent<HTMLInputElement>) => {

        const files = e.target.files;
        if (files && files.length > 0) {
          const [picture] = files;
          if (picture) {
            const reader = new FileReader();
            reader.onload = (event) => {
              if (prevision.current && event.target) {
                setImgSrc(event.target.result as string);
              }
            };    
            reader.readAsDataURL(picture);
          }
        }
      };

      //ajout de l'étape dans un tableau
      const handleAddStepClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newStep = { title: "", image: null, paragraphs: [""], ingredient: [""] };
        setSteps((prevSteps) => [...prevSteps, newStep]);
      };
      const handleStepSubmit = (newStep: Step, index: number) => {
        // Mettre à jour l'étape dans le tableau
        setSteps((prevSteps) =>
          prevSteps.map((step, idx) => (idx === index ? newStep : step))
        );
        if (index === steps.length - 1) {
          addNewStep();
        }
      };
      const addNewStep = () => {
        const newStep = { title: "", image: null, paragraphs: [""], ingredient: [""] };
        setSteps((prevSteps) => [...prevSteps, newStep]);
      };
      const handleSubmit = () => {
        console.log("Recette soumise avec les étapes:", steps);
      };

    return (
        <div className="flex flex-col">
            <form method="post" className="flex flex-col mx-auto w-2/4">
                <label htmlFor="title">Titre</label>
                <input aria-label="text pour le titre" type="text" id="title" />
                <label htmlFor="img_upload">Image de présentation
                <div ref={prevision} className="w-4/5" >
                {imgSrc ? (
                    <img src={imgSrc} alt="Prévisualisation" className="object-cover w-full h-[400px] rounded-[16px]"/>
                ) : (
                    <img src={img_icone} alt="Prévisualisation" className="object-cover w-full h-[400px] rounded-[16px]"/>
                )}
                </div>
                </label>
                <input aria-label="ajout image" type="file" id="img_upload" onChange={readUrl} className="opacity-0" />
                <label htmlFor="presentation">Présentation</label>
                <textarea id="presentation" name="presentation" placeholder="Le Bibimbap est un plat ..." required></textarea>
            </form>
                <div>
                {steps.map((step, index) => (
                  <Step_recipe key={index} step={step} index={index} onStepSubmit={handleStepSubmit}/>
                ))}
                </div> 
            <button onClick={handleAddStepClick}>Ajoutez une étape</button>
            <button onClick={handleSubmit} type="submit">Envoyer</button>
        </div>        
    )
}

export default Add_recipe
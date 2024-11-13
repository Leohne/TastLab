import { useState } from "react";

interface Step {
  title: string;
  image: string | null;
  paragraphs: string[];
  ingredient: string[];
}

interface StepRecipeProps {
  step: Step;
  index: number;
  onStepSubmit: (newStep: Step, index: number) => void;
}

const Step_recipe: React.FC<StepRecipeProps> = ({ step, index, onStepSubmit }) => {
  const [stepTitle, setStepTitle] = useState(step.title);
  const [stepParagraph, setStepParagraph] = useState(step.paragraphs[0]);
  const [stepIngredient, setStepIngredient] = useState(step.ingredient[0]);
  const [stepImage, setStepImage] = useState(step.image);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStepImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newStep = {
      title: stepTitle,
      image: stepImage,
      paragraphs: [stepParagraph],
      ingredient: [stepIngredient],
    };
    onStepSubmit(newStep, index);
    console.log("Recette soumise avec les étapes:", step);
  };

  return (
    <div className="step-form">
      <label htmlFor={`step_title_${index}`}>Titre de l'étape</label>
      <input
        type="text"
        id={`step_title_${index}`}
        value={stepTitle}
        onChange={(e) => setStepTitle(e.target.value)}
        required
      />

      <label htmlFor={`step_image_${index}`}>Image de l'étape</label>
      <input type="file" id={`step_image_${index}`} onChange={handleImageChange} />

      <label htmlFor={`step_ingredient_${index}`}>Ingrédients</label>
      <textarea
        id={`step_ingredient_${index}`}
        value={stepIngredient}
        onChange={(e) => setStepIngredient(e.target.value)}
        required
      />

      <label htmlFor={`step_paragraph_${index}`}>Description de l'étape</label>
      <textarea
        id={`step_paragraph_${index}`}
        value={stepParagraph}
        onChange={(e) => setStepParagraph(e.target.value)}
        required
      />

      {stepImage && <img src={stepImage} alt="Prévisualisation de l'étape" style={{ width: "100px" }} />}

      <button onClick={handleSubmit}>MAJ TAB ESSAI</button>
    </div>
  );
};

export default Step_recipe;

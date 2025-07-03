import { useState } from "react";
import ClaudRecipe from "./ClaudRecipe";
import Ingredients from "./Ingredients";

const Main = () => {
    const [ingredients, setIngredient] = useState(["Chicken", "Oregano", "Tomatoes", "Mutton"]);


    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");

        if (newIngredient.trim()) {
            setIngredient((prev) => [...prev, newIngredient]);
        }
    };

    const removeIngredient = (ingredientIndex) => {
        setIngredient((prev) => prev.filter((_, index) => index !== ingredientIndex));
    };



    return (
        <div className="p-5 my-10 max-w-4xl mx-auto font-poppins">
            {/* Add ingredient form */}
            <form
                className="flex flex-col sm:flex-row justify-center gap-4"
                action={addIngredient}
            >
                <input
                    type="text"
                    name="ingredient"
                    placeholder="e.g. oregano"
                    className="rounded-md px-4 py-2 w-full sm:w-auto border border-black focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                    type="submit"
                    className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900 transition-colors cursor-pointer"
                >
                    + Add ingredient
                </button>
            </form>

            {/* Ingredient list */}
            {ingredients.length > 0 && <Ingredients ingredients={ingredients} removeIngredient={removeIngredient} />}
        </div>
    );
};

export default Main;

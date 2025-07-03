import React from 'react'
import ClaudRecipe from './ClaudRecipe'
import { useState } from 'react';

const Ingredients = ({ ingredients, removeIngredient }) => {

    const [recipeShown, setRecipeShown] = useState(false);
    const handleRecipeShown = () => {
        setRecipeShown((prev) => !prev);
    };

    return (
        <div className="mt-10">
            <h2 className="text-2xl sm:text-3xl mb-4">Ingredients on hand:</h2>
            <div className="h-60 overflow-y-auto pr-2">
                <ul className="space-y-2">
                    {ingredients.map((ingredient, index) => (
                        <li
                            key={index}
                            className="bg-pink-200 hover:bg-pink-300 transition-colors rounded-md px-4 py-2 flex justify-between items-center"
                        >
                            <span>{ingredient}</span>
                            <button onClick={() => removeIngredient(index)}>
                                <i className="bi bi-trash2-fill text-xl text-gray-800 cursor-pointer  hover:text-black" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Call to action */}
            {ingredients.length > 3 && (
                <div className="bg-[#f0efeb] mt-6 px-6 py-6 rounded-md flex flex-col lg:flex-row justify-between items-center gap-4">
                    <div className="text-center lg:text-left">
                        <p className="text-xl font-semibold">Ready for a recipe?</p>
                        <p className="text-sm text-stone-700">
                            Generate a recipe from your list of ingredients
                        </p>
                    </div>
                    <button
                        className="bg-amber-600 hover:bg-amber-700 transition text-white px-5 py-2 rounded cursor-pointer w-full lg:w-auto"
                        onClick={handleRecipeShown}
                    >
                        Get a recipe
                    </button>
                </div>
            )}

            {/* Recipe Section */}
            <ClaudRecipe  recipeShown={recipeShown}/>
        </div>
    )
}

export default Ingredients

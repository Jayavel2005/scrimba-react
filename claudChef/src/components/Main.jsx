import { use, useState } from "react";

const Main = () => {

    const [ingredients, setIngredient] = useState(["Chicken", "Oregano", "Tomatoes", "Mutton"]);
    const [recipeShown, setRecipeShown] = useState(false);


    const addIngredient = (formData) => {
        const newIngredient = formData.get('ingredient');
        if (newIngredient.trim()) {
            setIngredient(prev => [...prev, newIngredient]);
        }
    }

    const removeIngredient = (ingredientIndex) => {
        setIngredient(prev => prev.filter((_, index) => index !== ingredientIndex));
    }

    const handleRecipeShown = () => {
        setRecipeShown(prev => !prev);
    }

    return (
        <div className="p-5 my-10 ">
            <form className="flex-col flex sm:flex-row sm:justify-center  gap-5  py-1" action={addIngredient} >
                <div className="form  sm:w-lg w-full">
                    <input
                        type="text"
                        name="ingredient"
                        placeholder="e.g. oregano"
                        className=" rounded p-3 w-full caret outline-2 outline-black" />
                </div>
                <button className="bg-black px-5 max-sm:py-2 rounded-md text-white cursor-pointer hover:bg-gray-950">+ Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <div className="mt-10 lg:px-30 px-0 ">
                    <h2 className="sm:text-3xl text-2xl my-6 font-poppins">Ingredients on hand:</h2>
                    <div className="mt-3 px-2 h-60 overflow-y-auto overflow-x-hidden scrollbar-hide">
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index} className="my-1  text-sm sm:text-lg font-poppins px-5 py-2 rounded-sm bg-pink-200 transition-transform hover:scale-102 hover:bg-pink-300 flex justify-between items-center"><p className="before:content-[''] before:mr-2">{ingredient}</p><button className="cursor-pointer" onClick={() => removeIngredient(index)}><i className="bi bi-trash2-fill text-3xl text-gray-900 hover:text-black"></i>
                                </button></li>
                            ))}
                        </ul>
                    </div>

                    {/* get recipe container */}
                    {ingredients.length > 3 &&
                        (
                            <div className="bg-[#f0efeb] py-7 px-6 mt-5 lg:px-20 rounded-md flex lg:flex-row flex-col lg:justify-between gap-3 items-center">
                                <div className="max-lg:w-full max-lg:text-center">
                                    <p className="font-poppins text-2xl">Ready for a recipe?</p>
                                    <p className="font-poppins text-sm text-stone-700">Generate a recipe from your list of ingredients</p>
                                </div>
                                <div className="max-lg:w-full">
                                    <button className="bg-amber-600 transition hover:bg-amber-700 text-white px-4 py-2 cursor-pointer rounded max-lg:w-full" onClick={handleRecipeShown}>Get a recipe</button>

                                </div>
                            </div>
                        )}

                    {/* Recipe Shown Container */}
                    {recipeShown &&
                        (<section className="mt-5 bg-[#f0efeb] p-5 rounded-md">
                            <h2 className="text-2xl md:text-3xl font-medium font-poppins">Suggested Recipe</h2>
                            <article className="suggested-recipe-container" aria-live="polite">
                                <p className="my-3 text-sm md:text-lg font-poppins">Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                                <p className="font-poppins mb-3 font-semibold text-xl">Beef Bolognese Pasta</p>
                                <p className="font-poppins text-lg mb-2 underline decoration-amber-500 underline-offset-3 font-semibold">Ingredients:</p>
                                <ul className="px-5 font-poppins my-4 md:text-lg text-sm">
                                    <li className="my-2 before:content-['🍒'] before:mr-5">1 lb. ground beef</li>
                                    <li className="my-2 before:content-['🍒'] before:mr-5">1 onion, diced</li>
                                    <li className="my-2 before:content-['🍒'] before:mr-5">3 cloves garlic, minced</li>
                                    <li className="my-2 before:content-['🍒'] before:mr-5">2 tablespoons tomato paste</li>
                                    <li className="my-2 before:content-['🍒'] before:mr-5">1 (28 oz) can crushed tomatoes</li>
                                    <li className="my-2 before:content-['🍒'] before:mr-5">1 cup beef broth</li>
                                    <li className="my-2 before:content-['🍒'] before:mr-5">1 teaspoon dried oregano</li>
                                    <li className="my-2 before:content-['🍒'] before:mr-5">1 teaspoon dried basil</li>
                                    <li className="my-2 before:content-['🍒'] before:mr-5">Salt and pepper to taste</li>
                                    <li className="my-2 before:content-['🍒'] before:mr-5">8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                                </ul>
                                <p className="font-poppins text-lg mb-2 underline underline-offset-3 font-semibold decoration-amber-500">Instructions:</p>

                                <ol className="list-decimal px-8 font-poppins my-4 md:text-lg text-sm">
                                    <li className="my-2">Bring a large pot of salted water to a boil for the pasta.</li>
                                    <li className="my-2">In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                                    <li className="my-2">Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                                    <li className="my-2">Stir in the tomato paste and cook for 1 minute.</li>
                                    <li className="my-2">Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                                    <li className="my-2">Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                                    <li className="my-2">While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                                    <li className="my-2">Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                                    <li className="my-2">Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                                </ol>
                            </article>
                        </section>)
                    }

                </div>
            )
            }
        </div>
    )
}

export default Main

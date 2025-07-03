import { useState } from "react";

const Main = () => {
    const [ingredients, setIngredient] = useState(["Chicken", "Oregano", "Tomatoes", "Mutton"]);
    const [recipeShown, setRecipeShown] = useState(false);

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");
        if (newIngredient.trim()) {
            setIngredient((prev) => [...prev, newIngredient]);
        }
    };

    const removeIngredient = (ingredientIndex) => {
        setIngredient((prev) => prev.filter((_, index) => index !== ingredientIndex));
    };

    const handleRecipeShown = () => {
        setRecipeShown((prev) => !prev);
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
                    className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900 transition-colors"
                >
                    + Add ingredient
                </button>
            </form>

            {/* Ingredient list */}
            {ingredients.length > 0 && (
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
                                        <i className="bi bi-trash2-fill text-xl text-gray-800 hover:text-black" />
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
                                className="bg-amber-600 hover:bg-amber-700 transition text-white px-5 py-2 rounded w-full lg:w-auto"
                                onClick={handleRecipeShown}
                            >
                                Get a recipe
                            </button>
                        </div>
                    )}

                    {/* Recipe Section */}
                    {recipeShown && (
                        <section className="bg-[#f0efeb] mt-6 px-6 py-6 rounded-md">
                            <h2 className="text-2xl md:text-3xl font-semibold">Suggested Recipe</h2>
                            <article className="mt-3" aria-live="polite">
                                <p className="text-sm md:text-lg mb-4">
                                    Based on the ingredients you have available, I recommend making a
                                    simple and delicious <strong>Beef Bolognese Pasta</strong>. Here is
                                    the recipe:
                                </p>
                                <h3 className="text-xl font-semibold mb-2">Beef Bolognese Pasta</h3>
                                <p className="text-lg font-semibold underline underline-offset-4 decoration-amber-500">
                                    Ingredients:
                                </p>
                                <ul className="list-none px-5 my-3 space-y-2 text-sm md:text-lg">
                                    {[
                                        "1 lb. ground beef",
                                        "1 onion, diced",
                                        "3 cloves garlic, minced",
                                        "2 tablespoons tomato paste",
                                        "1 (28 oz) can crushed tomatoes",
                                        "1 cup beef broth",
                                        "1 teaspoon dried oregano",
                                        "1 teaspoon dried basil",
                                        "Salt and pepper to taste",
                                        "8 oz pasta of your choice",
                                    ].map((item, i) => (
                                        <li key={i} className="before:content-['🍒'] before:mr-3">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg font-semibold underline underline-offset-4 decoration-amber-500 mt-4">
                                    Instructions:
                                </p>
                                <ol className="list-decimal px-6 mt-3 space-y-2 text-sm md:text-lg">
                                    <li>Boil salted water for pasta.</li>
                                    <li>Cook beef until browned, about 5–7 minutes.</li>
                                    <li>Add onion and garlic; cook until translucent.</li>
                                    <li>Stir in tomato paste, cook for 1 minute.</li>
                                    <li>Add crushed tomatoes, broth, herbs, salt & pepper.</li>
                                    <li>Simmer sauce on low for 15–20 minutes.</li>
                                    <li>Cook pasta per instructions, drain.</li>
                                    <li>Combine sauce and pasta.</li>
                                    <li>
                                        Serve hot. Garnish with basil or Parmesan, if desired.
                                    </li>
                                </ol>
                            </article>
                        </section>
                    )}
                </div>
            )}
        </div>
    );
};

export default Main;

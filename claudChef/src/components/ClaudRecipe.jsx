import React from 'react'

const ClaudRecipe = ({ recipeShown }) => {
    return (
        <>
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
        </>
    )
}

export default ClaudRecipe

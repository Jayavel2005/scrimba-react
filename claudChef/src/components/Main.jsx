import { useState } from "react";

const Main = () => {

    const [ingredients, setIngredient] = useState(["Chicken", "Oregano", "Tomatoes", "Mutton"]);


    const handleClick = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get('ingredient');

        if (newIngredient.trim()) {
            setIngredient(prev => [...prev, newIngredient]);

        }
        e.currentTarget.reset();


    }

    const removeIngredient = (ingredientIndex) => {
        setIngredient(prev => prev.filter((_, index) => index !== ingredientIndex));
    }

    return (
        <div className="p-5 my-10 ">
            <form className="flex-col flex sm:flex-row sm:justify-center  gap-5  py-1" action="#" onSubmit={handleClick}>
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
                <div className="mt-10 sm:px-50 px-0">
                    <h2 className="text-3xl my-6 font-poppins">Ingredients on hand:</h2>
                    <div className="my-3 px-2">
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index} className="my-1   text-lg font-poppins px-5 py-2 rounded-sm bg-amber-200 transition-transform hover:scale-103 hover:bg-amber-300 flex justify-between items-center"><p className="before:content-[''] before:mr-2">{ingredient}</p><button className="cursor-pointer" onClick={() => removeIngredient(index)}><i className="bi bi-trash2-fill text-3xl text-gray-900 hover:text-black"></i>
                                </button></li>
                            ))}
                        </ul>
                    </div>
                </div>)}
        </div>
    )
}

export default Main



const Main = () => {
    return (
        <div className="p-5 my-10">
            <form className="flex-col flex sm:flex-row sm:justify-center  gap-5 ">
                <div className="form  sm:w-lg w-full">
                    <input
                        type="text"
                        name="Add an ingredient"
                        placeholder="e.g. oregano"
                        className=" rounded p-3 w-full caret outline-2 outline-black" />
                </div>
                <button className="bg-black px-5 max-sm:py-2 rounded-md text-white cursor-pointer hover:bg-gray-950 ">+ Add ingredient</button>
            </form>
        </div>
    )
}

export default Main

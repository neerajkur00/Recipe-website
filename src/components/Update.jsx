import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [recipes, setrecipes] = useContext(recipecontext);
    const dish = recipes.find((r) => r.id === id);

    const [image, setimage] = useState(dish.image);
    const [title, settitle] = useState(dish.title);
    const [ingredients, setingredients] = useState(dish.ingredients);
    const [description, setdescription] = useState(dish.description);
    const [instructions, setinstructions] = useState(dish.instructions);

    const UpdateHandler = (e) => {
        e.preventDefault();
        const updatedData = {
            id: dish.id,
            image,
            title,
            ingredients,
            description,
            instructions,
        };
        const recipeIndex = recipes.findIndex((r) => r.id === id);
        const copyRecieps = [...recipes];
        copyRecieps[recipeIndex] = updatedData;
        setrecipes(copyRecieps);
        toast.success("Recipe Updated");
        navigate("/recipes");
    };

    return (
        <form onSubmit={UpdateHandler} className="w-[70%] m-auto  ">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Update <br /> Existing Recipe
            </h1>
            <input
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Image URL"
                onChange={(e) => setimage(e.target.value)}
                value={image}
            />
            <input
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
                onChange={(e) => settitle(e.target.value)}
                value={title}
            />
            <textarea
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe description..."
                onChange={(e) => setdescription(e.target.value)}
                value={description}
            ></textarea>
            <textarea
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
                onChange={(e) => setingredients(e.target.value)}
                value={ingredients}
            ></textarea>
            <textarea
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe instructions -> 'use comma to seperate instructions'..."
                onChange={(e) => setinstructions(e.target.value)}
                value={instructions}
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Update;

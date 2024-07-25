import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const navigate = useNavigate();
    const [recipes, setrecipes] = useContext(recipecontext);
    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [ingredients, setingredients] = useState("");
    const [description, setdescription] = useState("");
    const [instructions, setinstructions] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: nanoid(),
            image,
            title,
            ingredients,
            description,
            instructions,
        };
        setrecipes([...recipes, newRecipe]);
        navigate("/recipes");
    };

    return (
        <form onSubmit={SubmitHandler} className="w-[70%] m-auto  ">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Create <br /> New Recipe
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

export default Create;

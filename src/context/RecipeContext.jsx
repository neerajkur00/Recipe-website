import React, { createContext, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
    const [recipes, setrecipes] = useState([
        {
            id: "nsd9834bjk",
            image: "https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png",
            title: "Stracciatella (Italian Wedding Soup)",
            ingredients: `3 1/2 c Chicken broth; homemade,1 lb Fresh spinach; wash/trim/chop,1 Egg,1 c Grated parmesan cheese; --or--,1 c Romano cheese; freshly grated,Salt and pepper; to taste`,
            description:
                "The recipe originated in Rome hundreds and hundreds of years ago, and is said to have been created when families had loads of leftover broth on Christmas from cooking their meat.",
            instructions: `Bring 1 cup of the broth to a boil. Add spinach and cook until softened but still bright green. Remove spinach with a slotted spoon and set aside. Add remaining broth to pot. Bring to a boil. Meanwhile, beat egg lightly with a fork. Beat in 1/4 cup of cheese. When broth boils pour in egg mixture, stirring constantly for a few seconds until it cooks into "rags." Add reserved spinach, salt and pepper. Serve immediately, passing remaining cheese. NOTES: Someone asked for this recipe a while back. I believe this soup, known as "Stracciatella" is synonymous with Italian Wedding Soup, however, I seem to remember from I-don't-know-where that Italian Wedding Soup is the same as this but with the addition of tiny meatballs.`,
        },
    ]);
    return (
        <recipecontext.Provider value={[recipes, setrecipes]}>
            {props.children}
        </recipecontext.Provider>
    );
};

export default RecipeContext;

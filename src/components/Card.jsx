import { Link } from "react-router-dom";

const Card = (props) => {
    const dish = props.recipe;
    return (
        <Link
            to={`/recipes/${dish.id}`}
            className="mr-[3.3%] mb-[3%] text-center w-[30%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200"
        >
            <img className="w-[80%]" src={dish.image} alt={dish.title} />
            <h1 className="mt-5 mb-3 text-xl text-semibold">{dish.title}</h1>
            <p>{dish.description.slice(0, 100)}...</p>
            <div className="flex justify-between text-zinc-400 mt-5 ">
                <p className="text-center ">
                    <i className="ri-timer-line"></i>
                    <br />
                    <span className="text-sm">20min</span>
                </p>
                <p className="text-center">
                    <i className="ri-thumb-up-line"></i>
                    <br />
                    <span className="text-sm">Easy</span>
                </p>
                <p className="text-center">
                    <i className="ri-share-line"></i>
                    <br />
                    <span className="text-sm">Share</span>
                </p>
            </div>
        </Link>
    );
};

export default Card;

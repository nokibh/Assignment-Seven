const Recipe = ({ recipe, handleBtn }) => {
  return (
    <div className="card p-5  bg-base-100 shadow-xl">
      <img className="rounded-xl h-48" src={recipe.image_url} alt="Shoes" />

      <div className="card-body justify-start">
        <h2 className="card-title">{recipe.recipe_name}</h2>
        <p className="">{recipe.short_description}</p>
        <hr />
        <div className="text-start mb-2">
          <h3 className="font-bold">Ingredients:3</h3>
          <ol className="list-disc pl-5 mt-2 pb-2">
            <li>{recipe.Ingredients[0]}</li>
            <li>{recipe.Ingredients[1]}</li>
            <li>{recipe.Ingredients[2]}</li>
          </ol>
        </div>
        <hr />
        <div className="flex justify-around">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p>{recipe.Preparing_time}</p>
          </div>
          <div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
              <p>{recipe.Calories}</p>
            </div>
          </div>
        </div>
        <div className="card-actions ">
          <button
            onClick={() => handleBtn(recipe)}
            className="btn bg-green-400 rounded-full"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

const Recipe = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={recipe.image_url} alt="Shoes" />
      </figure>
      <div className="card-body justify-start">
        <h2 className="card-title">{recipe.recipe_name}</h2>
        <p className="">{recipe.short_description}</p>
        <hr />
        <div className="text-start mb-2">
          <h3>Ingredients:3</h3>
          <ol>
            <li>{recipe.Ingredients[0]}</li>
            <li>{recipe.Ingredients[1]}</li>
            <li>{recipe.Ingredients[2]}</li>
          </ol>
        </div>
        <hr />
        <div className="flex justify-around">
          <div>
            <img src="" alt="" />
            <p>Time</p>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <p>claored</p>
            </div>
          </div>
        </div>
        <div className="card-actions ">
          <button className="btn btn-primary">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Components/Recipe/Recipe';

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('./Recipe.json')
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
      });
  }, []);
  console.log(recipes);
  return (
    <>
      <div className="flex justify-around">
        <div className="carts-container">
          {recipes.map(rc => (
            <Recipe key={rc.id} recipe={rc}></Recipe>
          ))}
        </div>
        <div className="cart-container">Want to cook: </div>
      </div>
    </>
  );
}

export default App;

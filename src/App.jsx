import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Components/Recipe/Recipe';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('./Recipe.json')
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
      });
  }, []);
  const handleRecipe = r => {
    const isExist = cart.find(point => point.recipe_id == r.recipe_id);
    if (!isExist) {
      setCart([...cart, r]);
    } else {
      toast('already exisit');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-500 font-medium"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input type="text" className="w-full" placeholder="Search" />
              </label>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-slate-500 font-medium">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-8">
          <div>
            <label className="input input-bordered lg:flex items-center gap-2 hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="text" className="grow" placeholder="Search" />
            </label>
          </div>
          <div className="bg-emerald-300 p-2 rounded-full">
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
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      ;{/* banner section */}
      <div
        className="hero lg:h-[70vh] bg-cover bg-no-repeat bg-center rounded-2xl
        overflow-hidden my-8"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/8629106/pexels-photo-8629106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-lg lg:text-3xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 text-sm lg:text-base">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex gap-8 justify-center">
              <button className="btn bg-emerald-400 border-none text-sm lg:text-base font-bold rounded-full">
                Explore Now
              </button>
              <button className="btn btn-outline text-sm lg:text-base text-white font-bold border-white rounded-full">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
      <section>
        <div className="pb-14">
          <h2 className="text-xl font-bold">Our Recipes</h2>
          <p className="text-base font-normal">
            Try one of our signature selections and see what everyone's talking
            about!
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-around gap-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            {recipes.map(rc => (
              <Recipe key={rc.id} handleBtn={handleRecipe} recipe={rc}></Recipe>
            ))}
          </div>
          {/* want to cook */}
          <div className="border border-gray-300 rounded-xl p-4">
            <div>
              <h2 className="text-lg font-medium py-2">Want to cook: 0</h2>
              <hr />
              <div className=" grid grid-cols-4">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
              </div>
              <div className="cart-info">
                {cart.map(item => (
                  <div className="grid grid-cols-4">
                    <p>{item.recipe_name}</p>
                    <p>{item.Preparing_time}</p>
                    <p>{item.Calories}</p>
                    <button class="btn bg-green-400 rounded-full">
                      Preparing
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium py-2">Want to cook: 0</h2>
              <hr />
              <div className=" grid grid-cols-3">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
              </div>

              <div className="flex justify-between py-4">
                <p>Total Time = 0 minutes</p>
                <p>Total Calories = 0 calories</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

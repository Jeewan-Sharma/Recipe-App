import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import RecipeTile from "./component/RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const Your_APP_ID = "0b9e5f35";
  const Your_APP_KEY = "c3d1d2de865b96bfe2f7b9ce07818a6d";

  var url = `http://api.edamam.com/search?q=${query}&app_id=${Your_APP_ID}&app_key=${Your_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1>Food Recipe Plaza</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="Enter Ingridient"
          onChange={(e) => setquery(e.target.value)}
        ></input>

        <select className="app__healthLabels">
          <option onClick={() => sethealthLabels("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabels("vegetarian")}>
            Vegetarian
          </option>
          <option onClick={() => sethealthLabels("paleo")}>Paleo</option>
          <option onClick={() => sethealthLabels("dairy-free")}>
            Dairy-free
          </option>
          <option onClick={() => sethealthLabels("gluten-free")}>
            Gluten-free
          </option>
          <option onClick={() => sethealthLabels("wheat-free")}>
            Wheat-free
          </option>
          <option onClick={() => sethealthLabels("low-sugar")}>
            Low-sugar
          </option>
          <option onClick={() => sethealthLabels("egg-free")}>Egg-free</option>
          <option onClick={() => sethealthLabels("peanut-free")}>
            Peanut-free
          </option>
          <option onClick={() => sethealthLabels("tree-nut-free")}>
            Tree-nut-free
          </option>
          <option onClick={() => sethealthLabels("soy-free")}>Soy-free</option>
          <option onClick={() => sethealthLabels("fish-free")}>
            Fish-free
          </option>
          <option onClick={() => sethealthLabels("shellfish-free")}>
            Shellfish-free
          </option>
        </select>

        <input className="app__submit" type="submit" value="search"></input>
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} value="Search" />;
        })}
      </div>
    </div>
  );
}

export default App;

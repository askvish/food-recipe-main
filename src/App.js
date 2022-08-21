import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipesList from "./Components/RecipesList";
import Footer from "./Components/Footer";

const scrollTop = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [nClick, setNClick] = useState(0);

  var APP_ID = "da01fbea";
  var APP_KEY = "f81b60a41cd16f86d6af43edd6886e65";
  var start = 0;

  const getRecipes = async (start, end) => {
    var url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${start}&to=${end}`;
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSumbit = async (e) => {
    e.preventDefault();
    await getRecipes(0, 3);
    setNClick(nClick + 1);
  };

  const onClick = () => {
    scrollTop();
    setNClick(nClick + 1);
    start += 3 * nClick;
    getRecipes(start, start + 3);
  };

  return (
    <div className="app">
      <div className="searchBox">
        <h1 className="display-1">
          <span class="material-icons icon md-72">fastfood</span>
          <b>Food Recipes</b>
        </h1>
        <form className="input-group w-50 mx-auto" onSubmit={onSumbit}>
          <input
            type="text"
            className="form-control"
            placeholder="Type the ingredients, e.g, chicken, egg, mango, banana, milk..."
            required
            value={query}
            onChange={onChange}
          />
          <input type="submit" className="btn btn-dark" value="Search" />
        </form>
      </div>
      <hr />
      <div className="searchAppend">
        {recipes.map((recipe) => {
          return <RecipesList key={Math.random() * 100} recipe={recipe} />;
        })}
      </div>

      {nClick === 0 ? (
        <p>Search your recipes!</p>
      ) : (
        <div>
          <button id="more" className="btn btn-dark" onClick={onClick}>
            More Results
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;

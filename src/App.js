import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
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
  const [currentMeals, setCurrentMeals] = useState([]);
  const [nClick, setNClick] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 3;

  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getRecipes = async (start, end) => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php`;
    let result = await Axios.get(url, {
      params: {
        s: query,
      },
    });

    if (result.data.meals) {
      setRecipes(result.data.meals);
      setCurrentPage(1); // reset to first page
      setNClick(nClick + 1);
    } else {
      setRecipes([]);
      setCurrentPage(1);
      setNClick(nClick + 1);
    }
  };

  // This will recompute currentMeals when recipes or currentPage changes
  useEffect(() => {
    setCurrentMeals(recipes.slice(indexOfFirstMeal, indexOfLastMeal));
  }, [recipes, currentPage]);

  const onChange = (e) => {
    nClick > 0 && setNClick(0); // reset nClick if user types in the input
    setQuery(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await getRecipes(0, 3);
  };

  return (
    <div className="app">
      <div className="searchBox">
        <h1 className="display-1">
          <span className="material-icons icon md-72">fastfood</span>
          <b>Food Recipes</b>
        </h1>
        <form className="input-group w-50 mx-auto" onSubmit={onSubmit}>
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
        {currentMeals.length > 0
          ? currentMeals.map((recipe) => (
              <RecipesList key={recipe.idMeal} recipe={recipe} />
            ))
          : nClick > 0 && (
              <p
                className="text-center"
                style={{
                  backgroundColor: "white",
                  height: "50px",
                  borderRadius: "10px",
                  margin: "20px",
                }}
              >
                <span
                  style={{
                    padding: "20px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  No recipes found for "{query}"
                </span>
              </p>
            )}
      </div>

      {recipes.length > mealsPerPage && (
        <div className="text-center" style={{ margin: "20px" }}>
          {Array.from({ length: Math.ceil(recipes.length / mealsPerPage) }).map(
            (_, i) => (
              <button
                className="btn btn-dark"
                style={{ margin: "5px" }}
                key={i + 1}
                onClick={() => scrollTop() && paginate(i + 1)}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      )}

      {nClick === 0 && <p>Search your recipes!</p>}

      <Footer />
    </div>
  );
}

export default App;

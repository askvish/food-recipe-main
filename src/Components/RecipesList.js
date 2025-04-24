import React from "react";
import "../App.css";

export default function Item({ recipe }) {
  return (
    <div className="item card w-25">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="image img-thumbnail w-50 img-fluid mx-auto"
      />
      <div className="card-body">
        <h5 className="card-title">
          Dish Name: <u>{recipe.strMeal}</u>
          <a href={recipe.strYoutube} target="_blank" rel="noreferrer">
            <i className="fa fa-share-square"></i>
          </a>
        </h5>
        <hr style={{ color: "black", height: "2px" }} />
        <ul className="" style={{ listStyle: "none" }}>
          <li className="card-des">Dish Type: {recipe.strArea}</li>
          <li className="card-des">Meal Type: {recipe.strCategory}</li>
        </ul>
        <hr style={{ color: "black" }} />
        <h6 className="card-title">Ingredients</h6>
        <hr style={{ color: "black" }} />
        <ul className="list-group">
          <li className="list-group-item">{recipe.strIngredient1}</li>
          <li className="list-group-item">{recipe.strIngredient2}</li>
          <li className="list-group-item">{recipe.strIngredient3}</li>
          <li className="list-group-item">{recipe.strIngredient4}</li>
          <li className="list-group-item">{recipe.strIngredient5}</li>
          <li className="list-group-item">{recipe.strIngredient6}</li>
        </ul>
        <hr style={{ color: "black" }} />
        <p className="card-title descrip">
          {" "}
          For Full description... &nbsp;{" "}
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Visit Site
            <i className="fa fa-external-link" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

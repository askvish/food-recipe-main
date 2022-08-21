import React from "react";
import "../App.css";

export default function Item({ recipe }) {
  return (
    <div className="item card w-25">
      <img
        src={recipe.recipe.image}
        alt={recipe["recipe"]["label"]}
        className="image img-thumbnail w-50 img-fluid mx-auto"
      />
      <div className="card-body">
        <h5 className="card-title">
          Dish Name: <u>{recipe["recipe"]["label"]}</u>
          <a
            href={recipe["recipe"]["shareAs"]}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-share-square"></i>
          </a>
        </h5>
        <hr style={{ color: "black", height: "2px" }} />
        <ul className="" style={{ listStyle: "none" }}>
          <li className="card-des">
            Dish Type: {recipe["recipe"]["dishType"]}
          </li>
          <li className="card-des">
            Meal Type: {recipe["recipe"]["mealType"]}
          </li>
        </ul>
        <hr style={{ color: "black" }} />
        <h6 className="card-title">Ingredients</h6>
        <hr style={{ color: "black" }} />
        <ul class="list-group">
          {recipe["recipe"]["ingredientLines"].map((ingredient) => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul>
        <hr style={{ color: "black" }} />
        <p className="card-title descrip">
          {" "}
          For Full description... &nbsp;{" "}
          <a
            href={recipe.recipe.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Visit Site
            <i class="fa fa-external-link" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

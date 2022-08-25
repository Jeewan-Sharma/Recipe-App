import React from "react";
import "./RecipeTile.css";

export default function RecipeTile({ recipe }) {
  return (
    // recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) 
    // != null && (
      <div className="recipeTile">
        <img
          className="recipeTile__image"
          src={recipe["recipe"]["image"]}
          alt="description"
        ></img>
        <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
      </div>
//   )
  );
}

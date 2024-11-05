import axios from "axios";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setMeals(res.data.meals);
        console.log(res.data.meals);
      });
  }, []);

  return (
    <>
      <ul className="grid grid-cols-2">
        {meals.map((e) => {
          console.log(e.idMeal);
          return (
            <li id={e.idMeal} className="m-5 hover:scale-110 transition-all ">
              <h1 className="font-bold">{e.strMeal}</h1>
              <img src={e.strMealThumb} alt="" className="h-[200px] " />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Meals;

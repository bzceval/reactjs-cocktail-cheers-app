import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectDrink from "../components/SelectDrinks/SelectDrink";
import firstImg from "../helpers/firstImage.gif";
import "../index.css";

const Drinks = () => {
  const [drinksCategory, setDrinksCategory] = useState([]);
  const [selectDrink, setselectDrink] = useState();

  const SELECT_DRINKS =
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

  const getCategories = (API) => {
    axios.get(API).then((res) => setDrinksCategory(res.data.drinks));
  };

  useEffect(() => {
    getCategories(SELECT_DRINKS);
  }, []);

  return (
    <div className="drinks-container text-center">
      <div className="select-container py-5">
        <h4>Please Select Drink</h4>
        <select onChange={(e) => setselectDrink(e.target.value)}>
          <option selected>Please Select Drink </option>
          {drinksCategory.map((drink) => (
            <option className="option-drinks">{drink.strCategory}</option>
          ))}
        </select>
      </div>
      {selectDrink ? (
        ""
      ) : (
        <div className="w-full text-center mt-4">
          <img
            src={firstImg}
            width="300px"
            alt="loading"
            className="img-fluid"
          />
        </div>
      )}
      <div className="drinks-card-container my-5">
        <h1 className="text-center">{selectDrink}</h1>
        {selectDrink && <SelectDrink selectDrink={selectDrink} />}
      </div>
    </div>
  );
};

export default Drinks;

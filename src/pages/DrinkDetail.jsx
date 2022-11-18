import axios from "axios";
import React, { useEffect, useState} from "react";
import { useLocation} from "react-router-dom"

// const DRINK_DETAIL = `www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552`;

const DrinkDetail = () => {
  const [selectDrink, setSelectDrink] = useState() 
  const { state: drink } = useLocation()

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`;
  
  const getData = async () => {
    const { data } = await axios(url);
    setSelectDrink(data.drinks[0]);
  };

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            <span className="text-muted">{drink.strDrink}</span>
          </h2>
          <p className="lead">
            {selectDrink?.strInstructions}
          </p>
          <small className="opacity-50 text-nowrap">{selectDrink?.strAlcoholic}</small>
          <small className="opacity-50 text-nowrap"> {selectDrink?.strCategory}</small>
          <p>{selectDrink?.strGlass}</p>
          <ul>
            <li>{selectDrink?.strIngredient1}</li>
            <li>{selectDrink?.strIngredient2}</li>
            <li>{selectDrink?.strIngredient3}</li>
            <li>{selectDrink?.strIngredient4}</li> 
          </ul>
        </div>
        <div className="col-md-5">
          <img src={selectDrink?.strDrinkThumb} height="500" width="500" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DrinkDetail;

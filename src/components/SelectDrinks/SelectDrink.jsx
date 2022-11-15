import axios from "axios";
import React, { useEffect, useState } from "react";

const Drink = ({ selectDrink }) => {
  const [queryDrink, setQueryDrink] = useState([]);

  const SELECT_QUERY = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectDrink}`;

  const getDrink = (API) => {
    axios.get(API).then((res) => setQueryDrink(res.data.drinks));
  };

  useEffect(() => {
    getDrink(SELECT_QUERY);
  }, [SELECT_QUERY]);

  return (
    <div className="container">
    <div className="row">
          {queryDrink?.map((item) => {
            return (
              <div className="col-md-4 my-5">
              <div key={item?.idDrink} className="card shadow-sm">
                <img src={item?.strDrinkThumb} className="img-fluid" alt="" />
                <div className="card-body">
                  <h6 className="text-center text-warning">{item?.strDrink}</h6>
                  </div>
              </div>
              </div>
            );
          })} 
          </div>
          </div>
  )
};

export default Drink;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Drink = ({ selectDrink }) => {
  const [queryDrink, setQueryDrink] = useState([]);
   const navigate = useNavigate()

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
          {queryDrink?.map((drink) => {
            const {idDrink, strDrinkThumb, strDrink} = drink
            return (
              <div className="col-md-4 p-4">
              <div className="card shadow-sm">
                <img src={strDrinkThumb} className="img-fluid" alt="" />
                <div className="card-body">
                  <p>{idDrink}</p>
                  <h6 className="text-center text-warning">{strDrink}</h6>
                  <button className="btn btn-warning my-3" onClick={ () => navigate(`/drinks/${idDrink}`, {state: drink}) }>Detail</button>
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

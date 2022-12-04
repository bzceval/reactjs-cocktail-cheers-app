import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";

const Drink = ({ selectDrink }) => {
  const [queryDrink, setQueryDrink] = useState([]);
  const navigate = useNavigate();

  const SELECT_QUERY = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${selectDrink}`;

  const getDrink = (API) => {
    axios.get(API).then((res) => setQueryDrink(res.data.drinks));
  };

  useEffect(() => {
    getDrink(SELECT_QUERY);
  }, [SELECT_QUERY]);

  return (
    <div className="container">
      <div className="row ">
        {queryDrink?.map((item, index) => {
          const { idDrink, strDrinkThumb, strDrink } = item;
          return (
            <div
              className="col-md-4 flip-card my-5 d-flex justify-content-center "
              key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div key={idDrink} className="card shadow-sm">
                    <img src={strDrinkThumb} className="img-fluid" alt="" />
                    <div className="card-body">
                      <p className="text-center">{strDrink}</p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back d-flex justify-content-center align-items-center">
                  <button
                    className="btn button-hover w-50"
                    onClick={() =>
                      navigate(`/drinks/${idDrink}`, { state: item })
                    }>
                    Detail
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Drink;

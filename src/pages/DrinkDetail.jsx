import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// const DRINK_DETAIL = `www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552`;

const DrinkDetail = () => {
  const [selectDrink, setSelectDrink] = useState();
  const [selectDrinkDetail, setSelectDrinkDetail] = useState();
  const { state: drink } = useLocation();
  const navigate = useNavigate();

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`;
  const SELECT_QUERY_DETAIL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`;

  const getData = async () => {
    const { data } = await axios(url);
    setSelectDrink(data.drinks[0]);
  };
  const getDrinkDetail = async () => {
    const { data } = await axios(SELECT_QUERY_DETAIL);
    setSelectDrinkDetail(data.drinks[0]);
  };
  useEffect(() => {
    getLocation();
    getData();
    getDrinkDetail();
  }, []);
  ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const [latitude, setLatitude] = useState(null);
  const [longtitude, setLongtitude] = useState(null);
  const [status, setStatus] = useState(null);
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongtitude(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }

    if (latitude) {
      const objectDrink = { latitude, longtitude, drink: drink.strDrink };
      navigate("/places-drink", { state: objectDrink });
    }
  };
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <div className="drink-detail-container my-5">
      <div className="container">
        <div className="row">
          <div className="drink-description text-center my-5">
            <h1> {drink.strDrink} Drink </h1>
            <p className="lead">{selectDrink?.strInstructions}</p>
            <hr />
          </div>
          <div className="nested">
            <div className="row row-container">
              <div className="col shadow p-3 mb-5">
                <small className="opacity-50 text-nowrap">
                  {selectDrink?.strAlcoholic} {selectDrink?.strCategory}
                </small>
                <p className="fw-bolder fs-6">
                  {selectDrink?.strGlass.toUpperCase()}
                </p>
                <p className="fw-bolder fs-6 mb-0">Ingredient</p>
                <ul>
                  <li>{selectDrink?.strIngredient1}</li>
                  <li>{selectDrink?.strIngredient2}</li>
                  <li>{selectDrink?.strIngredient3}</li>
                  <li>{selectDrink?.strIngredient4}</li>
                </ul>
                <p className="fw-bolder fs-6 mb-0">Measure</p>
                <ul>
                  <li>{selectDrinkDetail?.strMeasure1}</li>
                  <li>{selectDrinkDetail?.strMeasure2}</li>
                  <li>{selectDrinkDetail?.strMeasure3}</li>
                </ul>
              </div>
              <div className="col mb-5">
                <img
                  src={selectDrink?.strDrinkThumb}
                  height="350"
                  width="300"
                  alt={drink.strDrink}
                />
              </div>
              <button
                className="btn button-hover w-50 m-auto"
                onClick={() => getLocation()}>
                Show Place
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetail;

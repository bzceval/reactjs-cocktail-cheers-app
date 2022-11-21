import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import loadingGif from "../helpers/loading gif.gif";
import "../index.css";

const PlacesDrink = ({ drinkType }) => {
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!! HOOKS
  const { state: drink } = useLocation();

  const [latitude, setLatitude] = useState(drink?.latitude);
  const [longtitude, setLongtitude] = useState(drink?.longtitude);
  const [status, setStatus] = useState(null);
  const [places, setPlaces] = useState([]);
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState(drink?.drink);

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!! METHODS
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
    console.log(latitude);
  };

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FETCH DATA

  const getData = async () => {
    setLoading(true);

    const urlPlaces = `http://list.ly/api/v4/search/place?ll=${latitude}%2C${longtitude}&q=${searchData}`;
    try {
      const { data } = await axios(urlPlaces);
      // console.log(data);
      setImages(data.results);
      setPlaces(data.raw_results);
    } catch (error) {
      console.log(error + "error");
      console.log(status);
    } finally {
      setLoading(false);
      setSearchData("");
    }
  };

  useEffect(() => {
    if (drink) {
      setLatitude(drink?.latitude);
      setLongtitude(drink?.longtitude);
      setSearchData(drink?.drink);
      getData();
    } else {
      getLocation();
    }
  }, []);

  return (
    <div className="places-container">
      <div className="search-container pt-5 pb-5">
        {/* <h5 className="mt-3 mb-3 text-center">Search Device Coffee</h5> */}
        <input
          type="search"
          className="form-control text-center"
          placeholder="Search Device Coffee"
          id="floatingInputValue"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />

        <button
          className="btn px-4 mt-3 button-hover"
          onClick={getData}
          disabled={!searchData}>
          Search
        </button>
      </div>
      <div className="container my-5">
        {loading ? (
          <div className="w-full text-center">
            <img src={loadingGif} alt="loading" className="img-fluid" />{" "}
          </div>
        ) : (
          <div className="places d-flex flex-wrap justify-content-center mb-5">
            {places.map((item, index) => {
              return (
                <div
                  className="card col-12 m-3"
                  style={{ width: "17rem", overflow: "hidden" }}
                  key={index}>
                  <img
                    className="card-img-top"
                    style={{ width: "280px", height: "300px" }}
                    src={item?.photos[0]?.fetched_url || item?.icon}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item?.name.toUpperCase()}</h5>
                    <hr />
                    <p className="card-text">
                      {" "}
                      <span>Address:</span>
                      <br /> {item?.formatted_address}
                    </p>

                    <small className="comments">
                      <p>Comment: </p>
                      <em>{item?.reviews[0]?.text}</em>
                    </small>
                    <div className="mt-4 d-flex justify-content-center align-bottom text-center w-100">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={item?.url}
                        className="btn button-hover d-flex justify-content-center align-items-center w-100">
                        View Map
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacesDrink;

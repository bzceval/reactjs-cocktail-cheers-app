import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css";

const PlacesDrink = ({ drinkType }) => {
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!! HOOKS
  const [latitude, setLatitude] = useState(null);
  const [longtitude, setLongtitude] = useState(null);
  const [status, setStatus] = useState(null);
  const [places, setPlaces] = useState([]);
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState("");

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
      console.log(data);
      setImages(data.results);
      setPlaces(data.raw_results);
    } catch (error) {
      console.log(error + "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="places-container">
       <div className="search-container pt-5 pb-5">
          {/* <h5 className="mt-3 mb-3 text-center">Search Device Coffee</h5> */}
          <input
            type="search"
            className="form-control text-center" placeholder="Search Device Coffee"
            id="floatingInputValue" 
            onChange={(e) => setSearchData(e.target.value)}
          />

          <button
            className="btn btn-outline-success px-4 mt-3"
            onClick={getData}
            disabled={!searchData}
          >
            Search
          </button>
        </div>
      <div className="container my-5">
        {loading && (
          <img
            src="https://flevix.com/wp-content/uploads/2019/12/Quarter-Circle-Loading-Image-1.gif"
            alt="loading"
            className="img-fluid"
          />
        )}
        <div className="d-flex flex-wrap justify-content-center mb-5">
          {places.map((item, index) => {
            return (
              <div
                className="card col-12 m-3 bg-secondary text-light"
                style={{ width: "17rem", height: "40rem", overflow: "hidden" }}
                key={index}
              >
                <img
                  className="card-img-top"
                  style={{ width: "280px", height: "300px" }}
                  src={item?.photos[0]?.fetched_url || item?.icon}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item?.name}</h5> 
                  <p className="card-text">{item?.formatted_address}</p>
                  <small className="comments">
                    <em>{item?.reviews[0]?.text}</em>
                  </small>
                  <div className="d-flex justify-content-center align-bottom text-center w-100">
                    <a href={item?.url} className="btn btn-danger w-75">
                      View Map
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlacesDrink;

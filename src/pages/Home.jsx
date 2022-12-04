import React, { useEffect, useState } from "react";

const Home = () => {
  const [randomDrink, setRandomDrink] = useState([]);
  const getRandomDrink = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    try {
      const res = await fetch(url);
      const data = await res.json();
      setRandomDrink([...randomDrink, data?.drinks[0]]);
      // console.log(randomDrink);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (randomDrink.length < 20) {
      getRandomDrink();
    }
  }, [randomDrink]);

  return (
    <>
      <div className="hero text-center py-5">
        <h1 className="p-2"> Welcome To Cheers</h1> 
        <div className="card my-4 home-card pt-3 pb-3">
          <h5 className="p-2">Search Cocktail, Find Place and Drink It!</h5>
          <div className="container">
            <p className="p-2">
              You can find the closest place to you by searching for the drink
              you want, or you can prepare it yourself by looking at the
              encyclopedia.
            </p>
          </div>
        </div>
        <div className="hero-container"></div>
        <div className="context">
          <section className="slide-option">
            <div className="container"></div>
            <div id="infinite" className="highway-slider">
              <div className="container highway-barrier">
                <hr className="my-5" />
                <h5 className="mb-1 ">Random Cocktail </h5>
                <ul className="highway-lane">
                  {randomDrink.map((item, index) => (
                    <li className="highway-car rounded shadow" key={index}>
                      <img
                        width="150"
                        className="rounded shadow"
                        src={item.strDrinkThumb}
                        alt=""
                      />
                      <span className="fab mx-4">{item.strDrink}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="area">
          <ul className="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

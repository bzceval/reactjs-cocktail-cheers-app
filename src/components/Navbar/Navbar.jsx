import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../auth/firebase";
import { MainContext } from "../../context/ContextProvider";

const Navbar = () => {
  const { currentUser } = useContext(MainContext);

  return (
    <header className="p-3 bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <NavLink
            to="/"
            className="brand-name d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            Device Coffee
          </NavLink>
          <ul className="nav col-12 col-lg-auto mx-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className="nav-link px-3 text-secondary">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/places-drink" className="nav-link px-3 text-white">
                Places to Drink
              </NavLink>
            </li>
            <li>
              <NavLink to="/drinks" className="nav-link px-3 text-white">
                Drinks
              </NavLink>
            </li>
          </ul>
          <div className="text-end">
            {currentUser ? (
              <div className="d-flex align-items-center">
                <h4>{currentUser.displayName || "Guest"}</h4>
                <button
                  className="btn btn-outline-danger ms-2"
                  onClick={() => logout()}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="text-end">
                <Link to="/login">
                  <button type="button" className="btn btn-outline-light me-2">
                    Login
                  </button>
                </Link>
                <Link to="/sign-up">
                  <button type="button" className="btn btn-outline-warning">
                    Sign-up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

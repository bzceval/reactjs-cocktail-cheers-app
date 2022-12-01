import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { register, signUpGoogle } from "../auth/firebase";
import backGroundImage from "../helpers/Social interaction.gif";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    setTimeout(() => {
      register(registerEmail, registerPassword, fullName, navigate);
      setLoading(false);
    }, 3000);
  };

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WITH GOOGLE
  const registerWithGoogle = () => {
    signUpGoogle(navigate);
  };

  return (
    <div className="container form-auth">
      <div className="d-flex justify-content-between align-items-center p-2">
        <div className="d-none d-lg-block">
          <img src={backGroundImage} alt="" />
        </div>
        <div className="w-100">
          <div className="row form-bg">
            <div className="col-sm-9 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5  display-6 fw-light fs-2">
                    Sign Up
                  </h5>
                  <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter full name..."
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                      <label htmlFor="floatingInput">Full Name</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        required
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="d-grid text-center">
                      {loading ? (
                        <img
                          src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c49c83ef51b0c4230f8f39560b8250a3-1596267998/navy_for-light_bg/make-animated-logo-loader-for-your-website.gif"
                          alt="spinner"
                          width="150px"
                          height="100px"
                          className="m-auto"
                        />
                      ) : (
                        <div className="d-grid mt-3">
                          <button
                            className="btn btn-outline-primary btn-login text-uppercase fw-bold"
                            type="submit"
                            disabled={loading}>
                            Sign Up
                          </button>
                          <p className="text-center mt-3">
                            Do you have an account ?
                            <Link to="/login"> Sign In</Link>
                          </p>
                        </div>
                      )}
                    </div> 
                    <div className="d-grid mb-2">
                      <button
                        className="my-4 btn btn-outline-danger btn-login text-uppercase fw-bold"
                        type="submit"
                        onClick={registerWithGoogle}>
                        <BsGoogle className="fs-6 me-3 mb-1" />
                        Sign Up with Google
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

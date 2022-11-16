import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { login, signUpGoogle } from "../auth/firebase";
import "../index.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!! LOGIN
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    setTimeout(() => {
      login(loginEmail, loginPassword, navigate);
      setLoading(false);
    }, 3000);
  };

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WITH GOOGLE
  const signGoogle = () => {
    signUpGoogle(navigate);
  };

  return (
    <div className="login-container">
      <div className="container ">
        <div className="row form-bg">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Sign In
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="rememberPasswordCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="rememberPasswordCheck">
                      Remember password
                    </label>
                  </div>
                  <div className="d-grid">
                    {loading ? (
                      <img
                        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c49c83ef51b0c4230f8f39560b8250a3-1596267998/navy_for-light_bg/make-animated-logo-loader-for-your-website.gif"
                        alt="spinner"
                        width="150px"
                        height="100px"
                        className="m-auto"
                      />
                    ) : (
                      <div className="d-grid">
                        <button
                          className="btn btn-outline-primary btn-login text-uppercase fw-bold"
                          type="submit"
                          disabled={loading}>
                          Sign In
                        </button>
                        <p className="text-center mt-3">
                          Do you have an account ?
                          <Link to="/sign-up">Sign Up</Link>
                        </p>
                      </div>
                    )}
                  </div>
                  <hr className="my-4" />
                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-outline-danger btn-login text-uppercase fw-bold"
                      type="submit"
                      onClick={signGoogle}>
                      <BsGoogle className="fs-6 me-3 mb-1" />
                      Sign in with Google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

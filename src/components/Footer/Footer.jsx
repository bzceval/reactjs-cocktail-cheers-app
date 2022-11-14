import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-dark text-light">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">Web design</Link>
                  </li>
                  <li>
                    <Link to="#">Development</Link>
                  </li>
                  <li>
                    <Link to="#">Hosting</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">Company</Link>
                  </li>
                  <li>
                    <Link to="#">Team</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Company Name</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div className="col item social text-center fs-3">
                <Link to="#">
                  <BsFacebook />
                </Link>
                <Link to="#">
                  <BsTwitter />
                </Link>
                <Link to="#">
                  <BsSnapchat />
                </Link>
                <Link to="#">
                  <BsInstagram />
                </Link>
              </div>
            </div>
            <p className="copyright display-6 text-center">
              © TEST {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

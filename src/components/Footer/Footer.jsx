import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row">
        <div className="text-center">
            <h3>Project Description</h3>
            <p className="small"> Praesent sed lobortis mi. Suspendisse vel placerat ligula. </p>
            <div className="col fs-5">
            <Link to="#"> <BsFacebook /></Link>
            <Link to="#"> <BsTwitter /> </Link> 
            <Link to="#"> <BsInstagram /> </Link>
          </div>
          </div>
        </div>
        <p className="mt-3 text-center text-muted">
          © Device Coffee {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default Footer;

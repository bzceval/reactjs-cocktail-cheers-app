import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h3>Project Description</h3>
            <p className="small">Search cocktails, Find places and Drink it!</p>
            <div className="col fs-5">
              <a
                href="https://www.linkedin.com/in/busra-zulal-ceval/"
                target="_blank"
                rel="noreferrer">
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/bzceval"
                target="_blank"
                rel="noreferrer">
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/murathudavendigaroncu/"
                target="_blank"
                rel="noreferrer">
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/murathudavendigar"
                target="_blank"
                rel="noreferrer">
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-muted">
          © Cheers {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

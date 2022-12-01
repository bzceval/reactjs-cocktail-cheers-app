import { BsGithub, BsLinkedin } from "react-icons/bs";
import "../../index.css";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h4>The Definitive Cocktail Encyclopaedia</h4>
            <p className="small">Search Cocktail, Find Place and Drink It!</p>
            <div className="col fs-5">
              <a
                href="https://www.linkedin.com/in/busra-zulal-ceval/"
                target="_blank"
                rel="noreferrer">
                <BsLinkedin className="bzc" />
              </a>
              <a
                href="https://github.com/bzceval"
                target="_blank"
                rel="noreferrer">
                <BsGithub className="bzc" />
              </a>
              <a
                href="https://www.linkedin.com/in/murathudavendigaroncu/"
                target="_blank"
                rel="noreferrer">
                <BsLinkedin className="mho" />
              </a>
              <a
                href="https://github.com/murathudavendigar"
                target="_blank"
                rel="noreferrer">
                <BsGithub className="mho" />
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

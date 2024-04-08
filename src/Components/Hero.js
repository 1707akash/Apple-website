import "./Hero.css";
import gbstorage from "../Assets/64gbstorage.png";
import a13bionic from "../Assets/a13bionic.png";
import easyDoesit from "../Assets/easyDoesit.png";
import ipadHero from "../Assets/ipadHero.jpg";
import ultrawide from "../Assets/ultrawide.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero">
      <div className="topHero">
        <div className="imageDiv">
          <span className="blockiPad text-9xl font-semibold">iPad</span>
          <img className="ipadHero" src={ipadHero} alt="ipadHero" />
          <img className="gbstorage" src={gbstorage} alt="gbstorage" />
          <img className="a13bionic" src={a13bionic} alt="a13bionic" />
          <img className="ultrawide" src={ultrawide} alt="ultrawide" />
        </div>
      </div>

      <div className="bottomHero">
        <img className="easyDoesit" src={easyDoesit} alt="easyDoesit" />
        <span className="text-2xl font-semibold">From ₹32900.00*</span>
        <p className="text-center text-xl">Powerful. Easy to use. Versatile. iPad is designed for all the things you love to do. Work, play,
        <br />
         create, learn, stay connected and more. All at an incredible value.</p>
        <span className="text-sky-600 text-xl font-semibold hover:underline">Why iPad <FontAwesomeIcon icon={faAngleRight} /></span>
      </div>
    </div>
  );
};

export default Hero;

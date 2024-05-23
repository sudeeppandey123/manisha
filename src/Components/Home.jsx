import React from "react";
import PropTypes from "prop-types";
import arrowSvg from "../images/down-arrow.svg";
import image from "../images/lum3n--RBuQ2PK_L8-unsplash.jpg";
import "./Home.css"; // Import the CSS file

const imageAltText = "pink background image with white headphone and mouse with pen and book";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
        <img src={arrowSvg} className="arrow-icon" alt="Down arrow" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;

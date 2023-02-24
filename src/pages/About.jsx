import React from "react";
import aboutpageImage from "../assets/image 54.png";

const About = () => {
  return (
    <div className="about_page">
      <div className="about-img-div">
        <img className="about-img" alt="about" src={aboutpageImage} />
      </div>
      <div className="about_details">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) 
          <br />
          <br />

             Our team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>

        <div className="explore_our_vans_card">
          <p>Your destination is waiting. Your van is ready.</p>
          <button className="Explore-btn">Explhore our vans</button>
        </div>
      </div>
    </div>
  );
};

export default About;

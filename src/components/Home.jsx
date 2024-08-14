import React from "react";
import About from "./Home_Components/About";
import Intro from "./Home_Components/Intro";
import Footer from "./Footer";
import FAQs from "./Home_Components/FAQs";
import Location from "./Home_Components/Location";
import Sponsors from "./Home_Components/Sponsors";
import "./css/home.css";

const Home = () => {
  return (
    <div>
      <Intro />
      <About />
      <Sponsors />
      <FAQs />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;

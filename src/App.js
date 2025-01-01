import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Team from "./components/Team";
import Newsletter from "./components/Newsletter";
import Magazine from "./components/Magazine";
import ContactForm from "./components/Contact";
import Events from "./components/Events";
import Registration from './components/EventRegsitration';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/team" element={<Team />}></Route>
            <Route exact path="/events" element={<Events />}></Route>
            <Route exact path="/newsletter" element={<Newsletter />}></Route>
            <Route exact path="/magazine" element={<Magazine />}></Route>
            <Route exact path="/contact" element={<ContactForm />}></Route>
            <Route exact path="/register" element={<Registration/>}></Route>
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;

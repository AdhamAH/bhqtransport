import React from "react";

import "./homepage.scss";
import Van from "../../img/van copy.jpg";

const Home = () => (
  <div className="body">
    <div className="content">
      <div className="image-box">
        <img src={Van} alt="van" className="image"></img>
      </div>
      <div className="menu-content">
        <h2>
          Welkom bij <span className="b">B</span>
          <span>H</span>
          <span className="q">Q</span>
          <span> Transpost</span>
        </h2>
        <p className="wat">
          Wij zijn een bedrijf die flexibel en enthousiast om te voldoen is.
          <br></br>
          <br></br> Als u een bedrijf zoekt dat altijd de perfect resultaat
          probeert te leveren, dan zijn wij de juiste keuze voor u.
        </p>
      </div>
    </div>
  </div>
);

export default Home;

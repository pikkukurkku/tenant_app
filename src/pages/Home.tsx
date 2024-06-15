import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

function Home() {
  return (
    <div className="Home">
      <span>Home ist jetzt Buena</span>
      <div className="navbar">
      
        <button className="button">Einloggen</button>
        <div className="navbar-btns">
        <p>So funktioniert's</p>
        <p>Über Buena</p>
        <p>Jobs</p>
        </div>
        <img src="./buena_logo.png" alt="buena logo" />
      </div>
      <section>
      <p className="register">Register with Buena and start booking apartments</p>
      <Link to="/name">
        <button className="button">Register here</button>
      </Link>
      </section>
      <div className="video-container">
      <video className="video" src="./buena_video.mp4"></video>
      </div>
    </div>
  );
}

export default Home;

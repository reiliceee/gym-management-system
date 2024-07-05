import React from 'react';
import rectangleImage from './Images/Rectangle46.png';
import LogoSta from './Images/LogoStamina.svg';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="relative bg-white min-h-[73px]">
      <img
        loading="lazy"
        src={rectangleImage}
        className="image"
        alt="Rectangle"
      />
      <div className="text-container">
        <span className="font-bold text-white">Start a better shape of you!</span>
        <span className="yellow-text">Come Join Us!</span>
      </div>
      <div className="logo-client flex items-center gap-3 px-5 text-2xl text-violet-950">
        <img
          loading="lazy"
          src={LogoSta} // Make sure to replace with the correct srcSet for your image
          className="logo-image"
        />
        <div className="mt-3 bold-text">
          Gym Management
          <br />
          System
          <br />
        </div>
      </div>
      <div className="rectangle67"></div> {/* Added div */}
      <div className="register">Register</div> {/* Added div */}
      <div className="bg-violet-950 min-h-[729px] rectangle68"></div> {/* New div */}
      <div className="about-text text-2xl text-center text-white max-w-[734px] tracking-[2.4px]">
        <span className="font-semibold text-white">About </span>
        <br />
        <span className="text-4xl text-white tracking-[4px]">
          STAMINA GYM FOR MAN & WOMAN
        </span>
      </div>
      <div className="text-xl font-bold tracking-wider text-yellow-200 max-w-[628px] fitness-text">
        Stamina Gym Fitness Center provides proper training and conditioning for
        members who want to improve and transform their body with Program depend
        on the body composition.
      </div>
    </div>
  );



}


export default App


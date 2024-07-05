import React from 'react';
import rectangleImage from './Images/Rectangle46.png';
import LogoSta from './Images/LogoStamina.png';
import MusclesImage from './Images/Muscles.png';
import PillsImage from './Images/Rectangle71.png';
import whiteBox from './Images/Group 31.png';
import Trainer from './Images/OfferIcon2.png';
import Chat from './Images/OfferIcon1.png';
import Member from './Images/Membership.png';

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

      <div className="about-container">
        <a href="#about-section" className="text-base font-bold max-w-[111px] text-violet-950">
          ABOUT
        </a>
      </div>

      <div id="about-section" className="bg-violet-950 min-h-[729px] rectangle68"></div> {/* New div with ID */}
      
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

      <div className="text-4xl text-white max-w-[227px] offer">
       What we offer: 
       </div>
      




      {/*  Muscle Picture    */}
      <img
        loading="lazy"
        src={MusclesImage}
        className="muscles-image"
        alt="Muscles"
      />

      {/* Pill image below the text */}
      <div className="rectangle71"></div>

      {/* Pill image gradient blue */}
      <div className="max-w-[381px] min-h-[577px] rectangle72"></div>

      {/* New div for Group 31 */}
      <div className="flex flex-col justify-center items-center px-2.5 text-base bg-gray-200 border border-solid shadow-sm aspect-square border-stone-400 rounded-[35px] text-violet-950 group-31">
        <div className="flex flex-col px-5 pt-5 pb-11 w-full bg-gray-200 rounded-3xl border-4 border-solid border-violet-950 h-[190px]">
          <img
            loading="lazy"
            src={whiteBox}
            className="self-end rounded-full aspect-[0.99] bg-violet-950 h-[93px] w-[93px]"
            alt="Nutrition Plan Guide"
          />
          
        </div>
      </div>

      {/*  Muscle Picture    */}
      <img
        loading="lazy"
        src={Trainer}
        className="rectangle57"
        alt="Trainer"
      />

      {/*  Muscle Picture    */}
      <img
        loading="lazy"
        src={Chat}
        className="rectangle571"
        alt="Chat"
      />

      {/* New div for Trainer */}
      <div className="rectangle79"></div>

      {/*  Members    */}
      <img
        loading="lazy"
        src={Member}
        className="rectangle79"
        alt="member"
      />
    


    
    </div>

  );
}


export default App


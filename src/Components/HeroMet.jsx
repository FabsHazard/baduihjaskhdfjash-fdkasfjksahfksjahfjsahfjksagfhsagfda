import React from 'react';
import { motion, AnimatePresence } from "framer-motion";


import { useState } from "react";
import "../styles/HeroMet.css";
import background from "../assets/images/Background.svg";

export const HeroMet = () => {

  return (
    <div className="hero-container">
      
      <img
        className="hero-image"
        alt=""
        src={background}
      />
      <div className="hero-content">
        <div className="hero-text">
          <p>
            The next evolution in Metaverse ecosystems. <br />
            Creating a decentralized portal for Web3 applications and smart contracts. <br />
                  
          </p>

        </div>
        <div className="hero-title">
          <p>Metchain</p>
        </div>
      
      </div>

    </div>
  );
};



  
  


import React from 'react';
import { motion, AnimatePresence } from "framer-motion";


import { useState } from "react";
import "../styles/HeroMet.css";
import background from "../assets/images/Mining.jpg";

export const HeroMetLogo = () => {
  return (
    <div className="hero-container">
      
      <img
        className="hero-image"
        alt=""
        src={background}
      />
    </div>
  );
};



  
  


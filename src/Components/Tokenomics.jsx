import { useState } from "react";
import { motion } from "framer-motion";
import dashboard from "../assets/images/dashboard.jpg";
import chart from "../assets/images/chart.png";
import infotokenomics from "../assets/images/InfoTokenomics.png";
import "../styles/Tokenomics.css";
import Article from "./Technology/Article";
import React from "react";

import "./Technology/technology.scss";
export const Tokenomics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

      
  const articles = [
    {
      title : "Distribution Details",
      image : chart,
      description : `At the core of Metchain’s ecosystem lies MET,
       the native coin designed not just for transactions but as a key unlocking a spectrum of functionalities and benefits.
        `,

    },
    {
      title : "The MET coin’s utilities are:",
      image : infotokenomics,
      description : ``,

    },
    {
      title : "The MET coin’s utilities are:",
      image : infotokenomics,
      description : ``,

    },
    {
      title : "The MET coin’s utilities are:",
      image : infotokenomics,
      description : ``,

    },
    {
      title : "The MET coin’s utilities are:",
      image : infotokenomics,
      description : ``,

    },
    {
      title : "The MET coin’s utilities are:",
      image : infotokenomics,
      description : ``,

    },
   ]
   return (
    <section
      className="w-screen flex justify-center items-center bg-customDarkBg3 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0 relative" // Added 'relative' to the section
      id="home"
      style={{
        margin: 0, // Ensure zero margin
        padding: 0, // Ensure zero padding
      
      }}
    > 
      <div className="circle"></div>
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            Discover Metchain Tokenomics
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
        

        </motion.div>
        
        {/* Removed empty motion.div elements */}
        
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="w-4/5 2xl:w-[1200px] mx-auto relative rounded-xl overflow-hidden"> {/* Added 'relative' and 'overflow-hidden' */}
            <img
              src={dashboard}
              alt="123"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

      <div className="Articles">
        {articles.map((article, index) => (
          <Article key={index} {...article} reversed={index%2===1} />
        ))}
      </div>

      </div>
    </section>

  );

};

import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import backgroundlines from "../assets/images/BackgroundMod.png";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1"
      style={{
        background: `url(${backgroundlines}) center center/cover no-repeat`,
      }}
    >
      {/* Bottom SVG Divider */}
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col"
      >
        {/* Left Content */}
        <motion.div
          className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto"
          variants={itemVariants}
        >
          <span className="custom-block-subtitle">Accelerate Your Success</span>
          <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
            Build &amp; Launch without problems
          </h2>
          <p className="mb-16 text-customGrayText leading-loose">
            Our platform enables you to launch your data-driven projects with
            ease. Boost productivity and achieve better results. Empower your
            decision-making with advanced analytics.
          </p>
          <motion.div
            className="w-[210px] h-12 custom-button-colored mr-10 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsModalOpen(true)}
          >
            Get Started
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0"
          variants={itemVariants}
        >
          <img
            src={featuresdiagonal}
            alt="f1"
            className="rounded-xl custom-border-gray"
          />
        </motion.div>
      </motion.div>

      {/* Top SVG Divider */}
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import TwitterImg from "../assets/images/CoinStatsLogo.png";
import InstagramImg from "../assets/images/CoinGecko.jpeg";
import ContractWolfImg from "../assets/images/ContractWolf.png";
import { useState, useRef } from "react";

export const Partnerships = () => {
  const partnershipRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      ref={partnershipRef}
      id="partnership"
      className="py-12 sm:py-24 bg-customDarkBg2 w-full mt-16 mb-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5"
      >
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full sm:w-full lg:w-4/5 mx-auto lg:mx-0 lg:pl-10">
            <motion.div
              className="flex flex-wrap -m-4"
              variants={containerVariants}
            >
              {/* Twitter */}
              <motion.div
                className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                variants={itemVariants}
              >
                <a
                  href="https://coinstats.app/coins/metchain/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={TwitterImg}
                    alt="Twitter"
                    className="w-24 h-24"
                    whileHover={{ scale: 1.1 }}
                  />
                </a>
              </motion.div>

              {/* Instagram */}
              <motion.div
                className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                variants={itemVariants}
              >
                <a
                  href="https://www.coingecko.com/en/coins/metchain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={InstagramImg}
                    alt="Instagram"
                    className="w-24 h-24"
                    whileHover={{ scale: 1.1 }}
                  />
                </a>
              </motion.div>

              {/* ContractWolf */}
              <motion.div
                className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                variants={itemVariants}
              >
                <a
                  href="https://contractwolf.io/projects/metchain-blockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={ContractWolfImg}
                    alt="ContractWolf"
                    className="w-24 h-24 object-contain"
                    whileHover={{ scale: 1.1 }}
                  />
                </a>
              </motion.div>

              {/* Add more icons here */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

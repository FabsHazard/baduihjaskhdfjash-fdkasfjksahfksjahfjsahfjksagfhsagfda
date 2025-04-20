import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon";
import EVM from "../../assets/images/EVM.png";
import metaverse from "../../assets/images/Metaverse.png";
import algorithm from "../../assets/images/Algorithm.png";
import metcoins from "../../assets/images/Metcoin.png";
import trading from "../../assets/images/trading.png";
import React from "react";
import "../../styles/imageStyles.css";
import "./technology.scss";
import Article from "./Article";
import { useInView } from "react-intersection-observer";

export const Technology = () => {
  const articles = [
    {
      title: "EVM Compatibility",
      image: EVM,
      description: `Metchain is an EVM-compatible chain, enabling seamless integration with Ethereum-based tools and protocols.`,
    },
    {
      title: "Metaverse Development Tools",
      image: metaverse,
      description: `Metchain provides developers with a comprehensive set of tools to create their own virtual worlds and experiences.`,
    },
    {
      title: "Evolved KHeavyhash Algorithm",
      image: algorithm,
      description: `Metchain is built on a modified KHeavyhash algorithm, which enables low-impact, high-speed, and secure transactions.`,
    },
    {
      title: "MetSwap Trading Protocol",
      image: metcoins,
      description: `MetSwap is Metchain's native trading protocol, empowering users to establish liquidity pools, execute decentralized exchanges, and stake tokens.`,
    },
  ];

  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

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

  const scrollEffect = {
    hidden: { y: 50 },
    visible: { y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="Technology-section"
      ref={ref}
      style={{
        margin: 0,
        padding: 0,
        overflow: "hidden", // Ensure no unwanted scrollbars
      }}
    >
      {/* Title */}
      <motion.div
        className="title"
        initial="hidden"
        animate={controls}
        variants={scrollEffect}
      >
        <h1>Technology</h1>
        <p>What makes Metchain Interesting?</p>
      </motion.div>

      {/* Articles Section */}
      <motion.div
        className="Articles"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {articles.map((article, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Article {...article} reversed={index % 2 === 1} />
          </motion.div>
        ))}
      </motion.div>

      {/* Background Movement */}
      <motion.div
        className="background-parallax"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${metaverse})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          zIndex: -1,
          filter: "blur(5px) opacity(0.5)",
        }}
        initial={{ y: 0 }}
        animate={{
          y: inView ? "-10%" : "0%",
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
      />
    </section>
  );
};

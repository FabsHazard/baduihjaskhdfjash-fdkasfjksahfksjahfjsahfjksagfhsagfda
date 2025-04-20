import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logos/MetchainLogo.png";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";
import React from 'react';
import "../styles/logo.css";
import LogoPng from "../assets/logos/Logo.png";

const scrollToCommunity = () => {
  const communitySection = document.getElementById('Community');
  //const communitySection = document.getElementsByClassName('Community');
  if (communitySection) {
    communitySection.scrollIntoView({ behavior: 'smooth' });
  }
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const handleDownloadLogoPng = () => {

  const link = document.createElement('a');

  // Convert the imported LogoPng to a data URL
  fetch(LogoPng)
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = 'Logo.png';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();

      // Clean up the created object URL
      URL.revokeObjectURL(url);
    })
    .catch(error => console.error('Error fetching LogoPng:', error));
};

const navbarLinks = [
  { label: "Home", href: "/", ariaLabel: "Home", openInNewTab: false },
  { label: "Explorer", href: "https://www.metscan.io/", ariaLabel: "Explorer", openInNewTab: true },
  { label: "Mining Pool", href: "https://www.metminingpool.com/", ariaLabel: "Mining Pool", openInNewTab: true },
  { label: "Wallet", href: "https://metwallet.metchain.tech/vec/", ariaLabel: "Wallet", openInNewTab: true },
  { label: "Download Logo", href: "#logo", ariaLabel: "Logo", onClick: handleDownloadLogoPng },
];

export const NavbarLogo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="#home" aria-label="Home" onClick={scrollToTop}>
            <div className="flex justify-start items-center grow basis-0">
              <div className="image-container" onClick={scrollToTop}>
                <img
                  src={logo}
                  alt="logo"
                  className="mb-2 rounded-md max-h-20 max-w-full cursor-pointer"
                />
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel, openInNewTab }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
                target={openInNewTab ? "_blank" : ""}
                rel={openInNewTab ? "noopener noreferrer" : ""}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex">
            <a
              className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
              href="https://github.com/Metchain"
              target="_blank"
              aria-label="source code"
            >
              <GithubIcon />
              <span className="pt-px">Source code</span>
            </a>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a
                className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                href="https://github.com/Metchain"
                target="_blank"
              >
                <GithubIcon />
                Source code
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


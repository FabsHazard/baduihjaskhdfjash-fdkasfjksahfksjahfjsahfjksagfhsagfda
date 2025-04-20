import { motion } from "framer-motion";
import wallet from "../assets/images/Wallet.png";
import mining from "../assets/images/metchainmining.png";
import staking from "../assets/images/Staking.png";
import button from "../assets/images/Button.png";
import React from "react";
import "../styles/imageStyles.css";
import miningPdf from "../assets/pdfs/mining_tutorial.pdf";

export const GetStarted = () => {
  const handleOpenNewTab = (url) => {
    const newTab = window.open(url, '_blank');
    if (newTab) {
      newTab.focus();
    }
  };
  
  const handleDownloadMiningPDF = () => {
    const link = document.createElement('a');
    link.href = miningPdf; // URL to the PDF file
    link.download = 'MiningTutorial.pdf'; // File name when downloaded
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };
  
  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading">
              <span style={{color: '#ffffff'}}>Get</span>
              <span style={{background: 'linear-gradient(to right, #4BBBF9 0%, #AB5ADA 50%, #EFB3E5 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}> Started</span>
          </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-20">
              {/* Pricing Box 1: Beginner */}
              <div className="w-[350px] px-4 mb-8">
                <div className="p-8 bg-customDarkBg3 rounded-3xl h-full flex flex-col justify-between">
                  <div>
                    <img
                      src={wallet}
                      alt="Beginner"
                      className="mb-4 rounded-md image-container"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <p className="mb-6 text-white leading-loose">
                      Create your Web wallet.
                    </p>
                  </div>
                  <div
                    className="custom-button-colored2 text-white font-bold leading-loose text-center py-2 px-4 rounded-xl rounded-t-xl"
                    onClick={() => handleOpenNewTab('https://metwallet.metchain.tech/')}
                    style={{ marginBottom: '10px' }} // adjust as needed
                  >
                    V3 Wallet
                  </div>
                  <div
                    className="custom-button-colored2 text-white font-bold leading-loose text-center py-2 px-4 rounded-xl rounded-t-xl"
                    onClick={() => handleOpenNewTab('https://www.wallet.metchain.org/')}
                  >
                    V4 Wallet
                  </div>

                </div>
              </div>

              {/* Pricing Box 2: Standard */}
              <div className="w-[350px] px-4 mb-8">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <img
                    src={mining}
                    alt="Beginner"
                    className="mb-4 rounded-md image-container"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <p className="mb-6 text-white leading-loose">
                    Start GPU mining Metchain to receive MET coin rewards.
                  </p>
                  <div
                    className="custom-button-colored2 text-white font-bold leading-loose text-center py-2 px-4 rounded-xl rounded-t-xl"
                    onClick={handleDownloadMiningPDF}
                  >
                    Start Mining
                  </div>
                </div>
              </div>

              {/* Pricing Box 3: Premium */}
              <div className="w-[350px] px-4 mb-8">
                <div className="p-8 bg-customDarkBg3 rounded-3xl h-full flex flex-col justify-between">
                  <div>
                    <img
                      src={staking}
                      alt="Beginner"
                      className="mb-4 rounded-md image-container"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <p className="mb-6 text-white leading-loose">
                      Engage in NFT staking to earn Met rewards.
                    </p>
                  </div>
                  <div
                    className="custom-button-colored2 text-white font-bold leading-loose text-center py-2 px-4 rounded-xl rounded-t-xl"
                    onClick={() => handleOpenNewTab('https://metwallet.metchain.tech/')}
                  >
                    Start Staking
                  </div>

  
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

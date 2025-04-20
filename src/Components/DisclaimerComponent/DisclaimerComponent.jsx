import { motion } from "framer-motion";
import React from 'react';
import background1 from "../../assets/images/Background1.png";
import "../../styles/gradient.css";

export const DisclaimerComponent = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 pt-32 pb-8 sm:pt-40 sm:pb-16 xl:pt-48 xl:pb-16"
      id="features"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center justify-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-3/4 mb-12 lg:mb-0">
            <div className="mx-auto lg:mb-0 w-95 sm:w-4/5 md:w-95 lg:w-unset text-center">
              <h2 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: "#DCA3EF" }}>Disclaimer</h2>
              <p className="mt-6 mb-4 text-white text-center text-sm lg:text-base">
                Third-Party Links and Services
                MetChain Blockchain may contain links to third-party websites, services, or applications.
                We do not endorse or assume any responsibility for any such third-party sites or services.
                Accessing third-party content is at your own risk. 
              </p>
              <p className="mt-6 mb-4 text-white text-center text-sm lg:text-base">
                MetChain has partnered with TradingView for its charting technology. A comprehensive trading and investing platform offering cutting edge analytical tools, global market data, and financial news to track <a href="https://www.tradingview.com/symbols/BTCUSD/" target="_blank" rel="noopener noreferrer" style={{ color: "#DCA3EF", textDecoration: 'underline' }}>bitcoin usd</a> and many others.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

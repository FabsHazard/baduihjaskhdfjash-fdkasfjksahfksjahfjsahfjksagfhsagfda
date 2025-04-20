import { motion } from "framer-motion";
import NFTImg from "../assets/images/NFT.png";
import "../styles/NFTStyle.css";

export const NFT = () => (
  <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2 text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                Genesis
              </h2>
              <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                NFT Collection
              </h2>
              <p className="mb-10 text-white text-leftleading-loose">
                The Metchain NFTs Genesis collection is a utility-focused collection offering 
                its holders the early access to Metchain products and features. Metchain is the protocol
                that aims to accelerate the adoption of the metaverse by connecting blockchains
                  hosting metaverse projects seamlessly.

                  NFTs are also a crucial part of the evolution of the Metchain Layer 2,
                  being effectively part of the consensus, allowing Metchain to open staking possibilities to their holders.

                  As pioneers of the Metchain network, 
                  Metchain NFT holders will be testing all products
                  before they are even live.
                    Metchain NFT holders play a crucial role in the Metchain ecosystem as they will 
                    provide the valuable feedback needed in the development and in return
                    , contribute to the growth of Metchain and achieve a decentralized ecosystem.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="w-2/3 sm:w-[620px] mx-auto">
              <div className="py-6 flex justify-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "100%", height: "100%" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHoverTransition={{ duration: 0.2 }}
                    className="w-64 h-64 flex items-center justify-center"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <img
                      src={NFTImg}
                      alt="LinkedIn"
                      className="w-full h-full object-cover"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);



import { motion } from "framer-motion";
import LinkedInImg from "../assets/images/LinkedIn.png";
import TelegramImg from "../assets/images/Telegram.png";
import MediumImg from "../assets/images/Medium.png";
import TwitterImg from "../assets/images/Twitter.png";
import InstagramImg from "../assets/images/Instagram.png";
import GithubImg from "../assets/images/Github.png";
import RedditImg from "../assets/images/Reddit.png"
import LinkTree from "../assets/images/LinkTreeWhite.png"
import Discord from "../assets/images/Discord.png"
import { useState, useRef } from "react";


export const Community = () => {
  const communityRef = useRef(null);

  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isTelegramHovered, setIsTelegramHovered] = useState(false);
  const [isMediumHovered, setIsMediumHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

  const handleLinkedInHover = () => {
    setIsLinkedInHovered(!isLinkedInHovered);
  };

  const handleTelegramHover = () => {
    setIsTelegramHovered(!isTelegramHovered);
  };

  const handleMediumHover = () => {
    setIsMediumHovered(!isMediumHovered);
  };

  const handleTwitterHover = () => {
    setIsTwitterHovered(!isTwitterHovered);
  };

  const handleInstagramHover = () => {
    setIsInstagramHovered(!isInstagramHovered);
  };

  const handleGithubHover = () => {
    setIsGithubHovered(!isGithubHovered);
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section ref={communityRef} id="community" className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-16">
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
                    Join the community
                </h2>
                <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                    all over the World
                </h2>
                </div>
            </div>

            {/* Code for each social media icon */}
            <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
              <div className="flex flex-wrap -m-4">
                <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleLinkedInHover()}
                  onHoverEnd={() => handleLinkedInHover()}
                  variants={iconVariants}
                  animate={isLinkedInHovered ? "hover" : "initial"}
                >
                  <a href="https://www.linkedin.com/company/metchain-tech/" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={LinkedInImg}
                      alt="LinkedIn"
                      className="w-24 h-24"
                      whileHover={{ scale: 1.1 }}
                    />
                  </a>
                </motion.div>
                <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleTelegramHover()}
                  onHoverEnd={() => handleTelegramHover()}
                  variants={iconVariants}
                  animate={isTelegramHovered ? "hover" : "initial"}
                >
                  <a href="https://t.me/Metchainofficial" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={TelegramImg}
                      alt="Telegram"
                      className="w-24 h-24"
                      whileHover={{ scale: 1.1 }}
                    />
                  </a>
                </motion.div>
                <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleMediumHover()}
                  onHoverEnd={() => handleMediumHover()}
                  variants={iconVariants}
                  animate={isMediumHovered ? "hover" : "initial"}
                >
                  <a href="https://medium.com/@Metchain" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={MediumImg}
                      alt="Medium"
                      className="w-24 h-24"
                      whileHover={{ scale: 1.1 }}
                    />
                  </a>
                </motion.div>
                <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleTwitterHover()}
                  onHoverEnd={() => handleTwitterHover()}
                  variants={iconVariants}
                  animate={isTwitterHovered ? "hover" : "initial"}
                >
                  <a href="https://twitter.com/Metchain_Tech" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={TwitterImg}
                      alt="Twitter"
                      className="w-24 h-24"
                      whileHover={{ scale: 1.1 }}
                    />
                  </a>
                </motion.div>
                <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleInstagramHover()}
                  onHoverEnd={() => handleInstagramHover()}
                  variants={iconVariants}
                  animate={isInstagramHovered ? "hover" : "initial"}
                >
                  <a href="https://www.instagram.com/metchain.tech/" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={InstagramImg}
                      alt="Instagram"
                      className="w-24 h-24"
                      whileHover={{ scale: 1.1 }}
                    />
                  </a>
                </motion.div>
                <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleGithubHover()}
                  onHoverEnd={() => handleGithubHover()}
                  variants={iconVariants}
                  animate={isGithubHovered ? "hover" : "initial"}
                >
                  <a href="https://github.com/Metchain" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={GithubImg}
                      alt="Github"
                      className="w-24 h-24"
                      whileHover={{ scale: 1.1 }}
                    />
                  </a>
                </motion.div>
                <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleGithubHover()}
                  onHoverEnd={() => handleGithubHover()}
                  variants={iconVariants}
                  animate={isGithubHovered ? "hover" : "initial"}
                >
                  <a href="https://www.reddit.com/r/Metchain/s/Yy9anKZtWk" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={RedditImg}
                      alt="Github"
                      className="w-24 h-24"
                      whileHover={{ scale: 1.1 }}
                    />
                  </a>
                </motion.div>
                <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleGithubHover()}
                  onHoverEnd={() => handleGithubHover()}
                  variants={iconVariants}
                  animate={isGithubHovered ? "hover" : "initial"}
                >
                  <a href="https://linktr.ee/metchain" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={LinkTree}
                      alt="Github"
                      className="w-24 h-24"
                      whileHover={{ scale: 1.1 }}
                    />
                  </a>
                </motion.div>
                <motion.div
                  className="w-1/2 sm:w-1/3 py-6 flex justify-center"
                  onHoverStart={() => handleGithubHover()}
                  onHoverEnd={() => handleGithubHover()}
                  variants={iconVariants}
                  animate={isGithubHovered ? "hover" : "initial"}
                >
                  <a href="https://discord.gg/DTbux8fz6a" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={Discord}
                      alt="Github"
                      className="w-24 h-24"
                      whileHover={{ scale: 1.1 }}
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};



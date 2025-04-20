import { motion } from "framer-motion";
import React from 'react';
import background1 from "../../assets/images/Background1.png";
import "../../styles/gradient.css";
import met1 from "../../assets/news/met1.jpeg";
import met2 from "../../assets/news/met2.jpeg";


const newsData = [
  {
    id: 1,
    image: met1,
    date: "June 1, 2024",
    title: "News Title 1",
    paragraph: "The Metchain team is working hard towards the objectives set out in the roadmap and really appreciate the community support. The team is glad to announce the release of Solo mining on local node.",
  },
  {
    id: 2,
    image: met2,
    date: "June 10, 2024",
    title: "News Title 2",
    paragraph: "Mining Update:",
  },
  // Add more news items here
];

const NewsItem = ({ image, date, title, paragraph }) => (
  <div className="bg-[#f1f1f1] p-6 mb-6 rounded-lg shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <p className="text-gray-600 text-sm">{date}</p>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-800">{paragraph}</p>
    </div>
  </div>
);

export const NewsComponent = () => {
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
          <div className="w-full mb-12 lg:mb-0">
            <div className="mx-auto lg:mb-0 w-95 sm:w-4/5 md:w-95 lg:w-unset text-center">
              <h2 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: "#DCA3EF" }}>News</h2>
              {newsData.map(news => (
                <NewsItem 
                  key={news.id}
                  image={news.image}
                  date={news.date}
                  title={news.title}
                  paragraph={news.paragraph}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

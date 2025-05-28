import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaShoppingCart,
  FaMobileAlt,
  
  FaCogs,
  FaPenNib,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const services = [
  {icon: <FaLaptopCode className="text-indigo-600 dark:text-indigo-400 w-8 h-8" />,title: "Développement Web",description:  "Création de sites web modernes, performants et responsives pour tous les supports.",},
  {  icon: <FaPaintBrush className="text-pink-500 dark:text-pink-400 w-8 h-8" />,  title: "UX/UI Design",  description:    "Conception d'interfaces intuitives et esthétiques pour une expérience utilisateur optimale.",},
  {  icon: <FaCogs className="text-yellow-500 dark:text-yellow-400 w-8 h-8" />,title: "Développement Logiciel", description: "Solutions logicielles sur mesure pour automatiser, optimiser et transformer votre business.",},
  {  icon:<FaShoppingCart className="text-green-500 dark:text-green-400 w-8 h-8" />,title: "Solutions E-commerce",  description:"Développement de boutiques en ligne robustes, sécurisées et adaptées à vos besoins.",},
  { icon: <FaMobileAlt className="text-teal-500 dark:text-teal-400 w-8 h-8" />, title: "Applications Mobiles", description:"Apps performantes pour Android et iOS, avec une UI fluide et moderne.",},
{ icon: <FaPenNib className="text-red-500 dark:text-red-400 w-8 h-8" />, title: "Rédaction Web", description:   "Création de contenus optimisés pour le SEO, captivants et adaptés à votre audience cible.",
}
];

const Service: React.FC = () => {

  return (
    <section id="Services" className="relative py-20 px-6 mt-6  ">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Nos Services
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Mélange parfait de conception intuitive et de technologie de pointe
        </p>
      </div>

      <motion.img
        src="./image/robot2.png"
        className="absolute hidden lg:block lg:w-44 lg:top-[5%] lg:right-[6%]"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute hidden md:block md:top-[5%] md:left-[30%]  lg:block lg:top-[7.5%] lg:left-[38%]"
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <BsStars size={40} className="text-black dark:text-white" />
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10 relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f5f5f5] dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-default"
            data-aos="fade-up"
            data-aos-delay={index * 200}
            data-aos-duration="600"
          >
            <div className="mb-4 flex items-center justify-center w-12 h-12 p-3 dark:bg-white dark:rounded-full">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;

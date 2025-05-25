import React from "react";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import { FaPaintBrush, FaCode, FaLaptopCode, FaLightbulb, FaComments, FaRocket, FaMobileAlt, FaDatabase,  FaShieldAlt, FaGlobe,
} from "react-icons/fa";

const Pub: React.FC = () => {
  const { t } = useTranslation();

 const items = [
   {label: "Design",icon: <FaPaintBrush className="mr-2 text-pink-500 dark:text-pink-400" />},
   {label: "Développement",icon: <FaCode className="mr-2 text-blue-600 dark:text-blue-400" />},
   {label: "UX/UI",icon: <FaLaptopCode className="mr-2 text-green-600 dark:text-green-400" />},
   {label: "Créativité",icon: <FaLightbulb className="mr-2 text-yellow-500 dark:text-yellow-400" />},
   { label: "Consulting IT", icon: <FaComments className="mr-2 text-purple-600 dark:text-purple-400" />,},
   { label: "Lancement de projets", icon: <FaRocket className="mr-2 text-red-500 dark:text-red-400" />,},
   { label: "Applications mobiles", icon: <FaMobileAlt className="mr-2 text-indigo-500 dark:text-indigo-400" /> ,},
   { label: "Base de données", icon: <FaDatabase className="mr-2 text-cyan-600 dark:text-cyan-400" />,},
   {label: "Cybersécurité", icon: <FaShieldAlt className="mr-2 text-orange-500 dark:text-orange-400" />},
   { label: "Stratégie Web", icon: <FaGlobe className="mr-2 text-lime-600 dark:text-lime-400" />,},
 ];

  return (
    <div className="w-full overflow-hidden bg-white md:mt-16 mt-16 lg:mt-0 dark:bg-gray-900/90 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-4 z-50">
      <Marquee gradient={false} speed={100} pauseOnHover={true}>
        {[...items].map((item, index) => (
          <a
            key={index}
            href={`#${item.label}`}
            className="flex items-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-100 px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-white dark:hover:bg-yellow-500 transition-colors duration-200 bg-transparent"
          >
            {item.icon}
            {t(item.label)}
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default Pub;

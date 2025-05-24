import React from "react";
import { useTranslation } from "react-i18next";


const Pub: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className=" w-full  bg-white dark:bg-gray-900/90  rounded-lg  shadow-xl  backdrop-blur-sm  border border-gray-200 dark:border-gray-700 z-50 py-2">
      {["Design", "Developper", "UX:UI", "Cretivité", "Consulting IT"].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className=" block  text-sm  font-medium  text-gray-800 dark:text-gray-100  px-4 py-2  rounded-md  hover:bg-yellow-400 hover:text-white dark:hover:bg-yellow-500  transition-colors duration-200 "
        >
          {t(item)}
        </a>
      ))}
    </div>
  );
};

export default Pub;

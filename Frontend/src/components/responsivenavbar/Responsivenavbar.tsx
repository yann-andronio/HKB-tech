import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  setmenuopen: (value: boolean) => void;
}

const Responsivenavbar: React.FC<Props> = ({ setmenuopen }) => {
  const { t } = useTranslation();

  return (
    <div className=" md:hidden  absolute top-20 right-4  w-40  bg-white dark:bg-gray-900/90  rounded-lg  shadow-xl  backdrop-blur-sm  border border-gray-200 dark:border-gray-700 z-50 py-2">
      {["home", "services", "contact", "about", "projet"].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={() => setmenuopen(false)}
          className=" block  text-sm  font-medium  text-gray-800 dark:text-gray-100  px-4 py-2  rounded-md  hover:bg-yellow-400 hover:text-white dark:hover:bg-yellow-500  transition-colors duration-200 "
        >
          {t(item)}
        </a>
      ))}
    </div>
  );
};

export default Responsivenavbar;

import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Responsivenavbar from "../responsivenavbar/Responsivenavbar";
import { Link as ScrollLink } from "react-scroll";


const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("thememode");
    return saved === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("thememode", String(darkMode));
  }, [darkMode]);

  const btndarkMode = () => setDarkMode((prev) => !prev);

  const ManovaLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const [menuopen, setmenuopen] = useState<boolean>(false);

  return (
    <nav id="Accueil" className="w-full bg-transparent dark:bg-transparent   ">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src="./image/logo1.png" alt="Logo" className="h-10 w-auto" />
            <a
              href="/"
              className="text-2xl font-extrabold text-gray-900 dark:text-white select-none"
            >
              HKB<span className="text-yellow-500"> Tech</span>
            </a>
          </div>

          <div className="hidden md:flex space-x-10  text-gray-900 dark:text-gray-100 px-8 py-3 ">
            {["Accueil", "A propos", "Services", "Contact", "FAQ"].map(
              (item) => (
                <ScrollLink
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className="font-semibold cursor-pointer hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
                >
                  {t(item)}
                </ScrollLink>
              )
            )}
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={ManovaLanguage}
              aria-label="Changer la langue"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
            >
              <IoLanguage size={24} />
            </button>

            <button
              onClick={btndarkMode}
              aria-label="Basculer mode sombre"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
            >
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>

            <button
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-yellow-500"
              onClick={() => setmenuopen(!menuopen)}
            >
              {menuopen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {menuopen && <Responsivenavbar setmenuopen={setmenuopen} />}
      </div>
    </nav>
  );
};

export default Navbar;

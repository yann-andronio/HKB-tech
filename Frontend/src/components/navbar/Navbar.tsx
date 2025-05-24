import React, { useState } from "react";
import { FaGlobe, FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const btndarkMode = (): void => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  const ManovaLanguage = (): void => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full bg-transparent dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              HKB<span className="text-yellow-500"> Tech </span>
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium"
            >
              {t("home")}
            </a>
            <a
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium"
            >
              {t("services")}
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium"
            >
              {t("contact")}
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium"
            >
              {t("about")}
            </a>
            <a
              href="#project"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium"
            >
              {t("project")}
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={ManovaLanguage}
              aria-label="Changer la langue"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400"
            >
              <FaGlobe size={22} />
            </button>

            <button
              onClick={btndarkMode}
              aria-label="Basculer mode sombre"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400"
            >
              {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

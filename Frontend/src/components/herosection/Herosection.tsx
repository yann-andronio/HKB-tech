import { FaArrowRight, FaEnvelopeOpenText } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

const Herosection: React.FC = () => {

   const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-center items-center text-center mt-16 sm:mt-28 lg:mt-40  px-4">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#000C18] dark:text-white drop-shadow-sm">
          {t("Beyond the Horizon")}
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-700 dark:text-blue-300 mt-3">
          {t(" We hold the keys")}
        </h2>
      </div>

      <div className="mb-10 text-lg sm:text-xl text-gray-700 dark:text-gray-300 space-y-1">
        <p>{t("gateway")}</p>
        <p>{t("boldDigital")}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="relative inline-flex items-center justify-center gap-2 px-7 py-3 overflow-hidden text-white font-semibold transition duration-300 ease-in-out bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md hover:scale-105">
          <ScrollLink
            to={"A propos"}
            smooth={true}
            duration={500}
            offset={-60}
            className="relative z-10 flex items-center"
          >
            {t("learnmore")}
            <FaArrowRight className="ml-2 text-white" />
          </ScrollLink>
          <span className="absolute inset-0 bg-white opacity-10 blur-sm"></span>
        </button>

        <button className="relative inline-flex items-center justify-center gap-2 px-7 py-3 overflow-hidden font-semibold border border-blue-700 dark:border-white text-blue-700 dark:text-white rounded-lg transition duration-300 ease-in-out hover:bg-blue-50 dark:hover:bg-white/10 hover:scale-105">
          <ScrollLink
            
            to={"Contact"}
            smooth={true}
            duration={500}
            offset={-60}
            className="relative z-10 flex items-center"
          >
            <FaEnvelopeOpenText className="mr-2" /> {t("contactusnow")}
          </ScrollLink>
          <span className="absolute inset-0 opacity-5 bg-blue-700 dark:bg-white blur-sm"></span>
        </button>
      </div>
    </section>
  );
};

export default Herosection;

import React from "react";
import { FaEye, FaLightbulb, FaBolt, FaHandsHelping } from "react-icons/fa";

const values = [
  {
    icon: <FaEye className="text-blue-400 w-8 h-8" />,
    title: "Vision",
    description:
      "Voir au-delà de l'horizon, anticiper les tendances et innover constamment.",
  },
  {
    icon: <FaLightbulb className="text-blue-400 w-8 h-8" />,
    title: "Savoir",
    description:
      "Maîtriser notre expertise pour proposer des solutions pertinentes et durables.",
  },
  {
    icon: <FaBolt className="text-blue-400 w-8 h-8" />,
    title: "Audace",
    description:
      "Oser prendre des risques calculés pour se démarquer et créer de l’impact.",
  },
  {
    icon: <FaHandsHelping className="text-blue-400 w-8 h-8" />,
    title: "Impact",
    description:
      "Agir concrètement pour changer positivement notre environnement et nos clients.",
  },
];



const Apropos: React.FC = () => {
  return (
    <section id="A propos" className=" mt-8 lg:mt-9  lg:py-24 px-6">
      <div className="max-w-7xl mx-auto lg:flex lg:items-start lg:gap-20">
        <div className="lg:w-1/2 text-gray-900 dark:text-gray-100">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Qui <span className="text-yellow-400">Sommes</span>-Nous ?
          </h1>
          <p className="mb-6 text-lg leading-relaxed">
            Chez <strong>HKB</strong>, nous sommes plus qu’une entreprise. Nous
            sommes une vision, une clé pour ouvrir les horizons de demain. Notre
            ambition est de transformer, innover et créer un impact durable.
          </p>
          <p className="mb-10 text-lg leading-relaxed">
            Découvrez comment <em>Horizon – Keys – Beyond</em> guide chacune de
            nos actions, avec passion et audace.
          </p>
          <a
            href="#vision"
            className="inline-block bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors duration-300"
          >
            Découvrez notre sevice
          </a>
        </div>

        <div className="mt-20 lg:mt-0 lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-[#f5f5f5] dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-default"
            >
              <div className="titreicon flex gap-4 dark:text-white">
                <div className="mb-4">{icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apropos;

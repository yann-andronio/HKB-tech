import { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaMinusCircle , FaPlusCircle } from "react-icons/fa";

const faqData = [
  {
    question: "C'est quoi HKB tech ?",
    answer:
      "HKB n’est pas simplement une société C’est une entité de construction économique, un centre de pouvoir intelligent, conçu pour bâtir un empire multisectoriel.",
  },
  {
    question: "Comment passer une commande sur notre site ?",
    answer:
      "Naviguez dans la section contact,puis remplissez les champs et cliquez sur envoyer le message et on se contacterais",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Nous acceptons les cartes bancaires, Mobile Money, ainsi que le paiement à la livraison selon votre localisation.",
  },
  {
    question: "Puis-je modifier ou annuler ma commande ?",
    answer:
      "Oui, tant que la commande n’a pas encore été expédiée. Contactez-nous dès que possible via le formulaire de contact.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="FAQ" className="max-w-4xl  mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900 dark:text-white mb-4">
        <span className="inline-flex items-center gap-2">
          <FiHelpCircle className="text-4xl" />
          Foire Aux Questions
        </span>
      </h2>

      <div className="space-y-4 mt-16">
        {faqData.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={index}
            className="rounded-xl border border-gray-300 dark:bg-gray-800 bg-white  shadow-md transition duration-300"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 dark:text-white focus:outline-none"
            >
              <span className="text-lg">{item.question}</span>
              {openIndex === index ? (
                <FaMinusCircle className="text-gray-600 dark:text-white text-xl" />
              ) : (
                <FaPlusCircle className="text-gray-600 dark:text-white text-xl" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 py-4 rounded-xl text-gray-700 dark:text-gray-300 text-sm leading-relaxed bg-gray-50 dark:bg-gray-800">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

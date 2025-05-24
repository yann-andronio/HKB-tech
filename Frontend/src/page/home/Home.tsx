import Herosection from "../../components/herosection/Herosection";
import Navbar from "../../components/navbar/Navbar";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <>
      <section>
        <header
          className=" relative bg-cover bg-center min-h-screen pt-6 dark:bg-fond-degradedark bg-fond-degradelight "
          // style={{ backgroundImage: "url('../../../public/image/fondheader.png')" }}
        >
          <Navbar />
          <div className="deco1">
            <motion.img
              src="./image/robot1.png"
              className="absolute w-60 top-[27%] left-[8%]"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-[30%] right-[25%]"
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
            <motion.img
              src="./image/cle.png"
              alt="Clé"
              className="absolute rotate-90 w-64 bottom-[15%] right-[9%]"
              animate={{
                rotate: [85, 95, 85], 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <Herosection />
        </header>
      </section>
    </>
  );
};

export default Home;

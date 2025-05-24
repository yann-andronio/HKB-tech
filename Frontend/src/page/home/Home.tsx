import Herosection from "../../components/herosection/Herosection";
import Navbar from "../../components/navbar/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <section>
        <header
          className="bg-cover bg-center min-h-screen pt-6 dark:bg-fond-degradedark bg-fond-degradelight "
          // style={{ backgroundImage: "url('../../../public/image/fondheader.png')" }}
        >
          <Navbar />
          <Herosection />
        </header>
      </section>
    </>
  );
};

export default Home;

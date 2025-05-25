// src/App.jsx
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./page/home/Home";
import Loader from "./components/loader/Loader";


const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? <Loader onComplete={() => setLoading(false)} /> : <Home />}
    </AnimatePresence>
  );
};

export default App;

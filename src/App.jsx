import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./Routes/Layout";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import Lenis from "lenis";
import { Path } from "three/src/Three.Core.js";
function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    
  }, []);

  return (
    <BrowserRouter>
      <Cursor />
      <Header />
      <Layout />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

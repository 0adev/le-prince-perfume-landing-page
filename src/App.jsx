import "./App.css";
import { Navbar, Brand } from "./components";
import CtaButton from "./components/ctaButton/CtaButton";
import {
  Header,
  Features,
  Collection,
  Order,
  Testimonials,
  Footer,
} from "./containers";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="App primary-ff w-100 d-flex align-items-center justify-content-center flex-column">
        <Navbar />
        <Header />
        <CtaButton />
        <Brand />
        <Features />
        <Collection />
        <Order />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;

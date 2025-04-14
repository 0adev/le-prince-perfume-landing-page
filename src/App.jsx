import "./App.css";
import { Navbar, Brand } from "./components";
import {
  Header,
  Features,
  Collection,
  Order,
  Testimonials,
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
      <div className="App primary-ff">
        <Navbar />
        <Header />
        <Brand />
        <Features />
        <Collection />
        <Order />
        <Testimonials />
      </div>
    </>
  );
}

export default App;

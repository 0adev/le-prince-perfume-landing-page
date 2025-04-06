import "./App.css";
import { Navbar, Brand } from "./components";
import { Header, Feature, Collection, Order } from "./containers";

function App() {
  return (
    <>
      <div className="App primary-ff">
        <Navbar />
        <Header />
        <Brand />
        <Feature />
        <Collection />
        <Order />
      </div>
    </>
  );
}

export default App;

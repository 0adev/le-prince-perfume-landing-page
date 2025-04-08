import "./App.css";
import { Navbar, Brand } from "./components";
import { Header, Features, Collection, Order } from "./containers";

function App() {
  return (
    <>
      <div className="App primary-ff">
        <Navbar />
        <Header />
        <Brand />
        <Features />
        <Collection />
        <Order />
      </div>
    </>
  );
}

export default App;

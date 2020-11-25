import "./App.css";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import CardsButton from "./Components/CardsButton/CardsButton";
import React, { useState } from "react";

function App() {
  const [hidden, setHidden] = useState(false);
  const clickHandle = () => {
    setHidden(!hidden);
  };
  return (
    <div className="App">
      <Header />
      <div className="container">
        <CardsButton clickFn={clickHandle} hidden={hidden} />
        {!hidden && <Cards />}
      </div>
      <Footer />
    </div>
  );
}

export default App;

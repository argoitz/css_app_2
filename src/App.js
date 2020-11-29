import "./App.css";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";

function App() {
  let cards = [
    {
      title: "card 1",
    },
    {
      title: "card 2",
    },
    {
      title: "card 3",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Cards cards={cards} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

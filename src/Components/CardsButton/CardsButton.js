import "./CardsButton.scss";

let CardsButton = ({ clickFn, hidden }) => {
  return (
    <div onClick={clickFn} className="cards-button">
      {!hidden ? "Hide" : "Show"} cards
    </div>
  );
};

export default CardsButton;

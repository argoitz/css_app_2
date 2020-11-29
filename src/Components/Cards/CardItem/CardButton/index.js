import "./index.scss";

const CardButton = ({ visible, setVisible }) => {
  return (
    <button onClick={() => setVisible(!visible)} className="card-button">
      {!visible ? "show" : "hide"} card
    </button>
  );
};

export default CardButton;

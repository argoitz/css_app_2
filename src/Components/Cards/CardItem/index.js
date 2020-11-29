import useCards from "./../../../useCards";
import CardButton from "./CardButton/index";

let CardItem = ({ title }) => {
  const { visible, setVisible } = useCards();
  return (
    <div className="card-item">
      {visible && (
        <div className="card-info">
          <div className="card-title">{title}</div>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor
          </div>
        </div>
      )}
      <CardButton visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default CardItem;

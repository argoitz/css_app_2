import "./Cards.scss";
import CardItem from "./CardItem/index";

let Cards = ({ cards }) => {
  let cardsHtml = cards.map((card) => <CardItem title={card.title} />);
  return <div className="cards">{cardsHtml}</div>;
};

export default Cards;

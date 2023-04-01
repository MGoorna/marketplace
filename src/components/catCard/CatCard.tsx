import { Link } from "react-router-dom";
import "./CatCard.scss";

interface Props{
  card: Card;
  key: number;
}
interface Card {
  img: string;
  desc: string;
  title: string;
}

function CatCard({ card }: Props) {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}
export default CatCard;
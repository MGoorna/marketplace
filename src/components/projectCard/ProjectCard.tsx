import "./ProjectCard.scss";

interface Props {
  card: Card;
}
interface Card {
  img: string;
  pp: string;
  cat: string;
  username: string;
}

function ProjectCard({ card }: Props ) {
  return (
    <div className="projectCard">
      <img src={card?.img} alt="" />
      <div className="info">
        <img src={card?.pp} alt="" />
        <div className="texts">
          <h2>{card?.cat}</h2>
          <span>{card?.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
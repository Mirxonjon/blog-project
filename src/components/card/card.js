import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa"

import "./card.scss";
const Card = ({ album }) => {

  return(
    <article className="card">
      <div>
        <time>{album?.date}</time>
        <p>{album?.type}</p>
      </div>

      <Link className="card-title" to={`/album/${album?.id}`}>{album?.title}</Link>

      <span className="card-duration"><FaClock className="clock-icon" />{album?.duration} minutes read</span>
      <hr />
    </article>
  );
};

export default Card;
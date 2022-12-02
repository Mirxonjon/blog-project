import { useState } from "react";
import { FaThumbsUp, FaShareAlt } from "react-icons/fa"
import "./likes-shares.scss";

const LikesShares = ({ currentAlbum }) => {

  const [like, setLike] = useState(currentAlbum?.likes);
  const [share, setShare] = useState(currentAlbum?.shares);


  const handleLikeClick = () => {
    if(like === currentAlbum?.likes) {
      setLike(like + 1)
    } else {
      setLike(like - 1)
    }
  } 

  const handleShareClick = () => {
    if(share === currentAlbum?.shares) {
      setShare(share + 1)
    } else {
      setShare(share - 1)
    }
  }

  return(
    <div className="likes-shares__wrapper">
      <span onClick={handleLikeClick} className="like"><FaThumbsUp  />{like}</span>
      <span onClick={handleShareClick} className="share"><FaShareAlt />{share}</span>
    </div>
  );
};

export default LikesShares;
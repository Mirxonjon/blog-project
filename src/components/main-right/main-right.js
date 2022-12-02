import { useContext } from "react";
import { AlbumsContext } from "../../contexts/albums";
import Card from "../card/card";
import "./main-right.scss";


const MainRight = () => {

  const {filteredAlbums} = useContext(AlbumsContext);

  return(
    <div className="main-right">
      <h2>Recent Posts</h2>
      {filteredAlbums?.map(album => (
        <Card album={album} key={album.id} />
      ))}
    </div>
  );
};  

export default MainRight;
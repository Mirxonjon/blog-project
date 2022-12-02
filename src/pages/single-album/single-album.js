import Card from "../../components/card/card";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AlbumsContext } from "../../contexts/albums";

import "./single-album.scss";
import Navbar from "../../components/navbar/navbar";
import Container from "../../components/container/container";
import LikesShares from "../../components/likes-shares/likes-shares";
import Footer from "../../components/footer/footer";

const SingleAlbum = () => {
  const { id } = useParams();
  const { albums } = useContext(AlbumsContext);

  const currentAlbum = albums?.find(album => album.id === +id);
  return(
    <Container>
      <Navbar />

      <main className="main"> 
        <div className="main-left">
          <LikesShares currentAlbum={currentAlbum} />
        </div>
        <div className="main-right">
          <Card album={currentAlbum} key={currentAlbum?.id}/>
          <img className="single-album__img" src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png"
          alt="single album img" />
          <p className="single-album__description">{currentAlbum?.body}</p>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default SingleAlbum;
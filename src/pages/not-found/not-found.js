import Container from "../../components/container/container";
import Navbar from "../../components/navbar/navbar";
import "./not-found.scss";
import NotFoundContent from "../../components/not-found-content/not-found-content";

const NotFound = () => {



  
  return(
    <Container className="not-found__wrapper">
      <Navbar />
      <NotFoundContent />
    </Container>
  );
};

export default NotFound;
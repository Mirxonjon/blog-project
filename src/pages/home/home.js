import Container from "../../components/container/container";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  return(
    <Container>
      <Navbar />  
      <Main />
      <Footer />
    </Container>
  );
};

export default Home;
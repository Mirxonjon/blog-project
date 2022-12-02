import Intro from "../intro/intro";
import MainRight from "../main-right/main-right";

import "./main.scss";

const Main = () => {

  return(
    <main className="main"> 
      <Intro />
      <MainRight />
    </main>
  );
};

export default Main;
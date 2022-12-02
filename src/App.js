import { Route, Routes } from "react-router-dom";
import AlbumsProvider from "./contexts/albums";

import Home from "./pages/home/home";  
import NotFound from "./pages/not-found/not-found";
import SingleAlbum from "./pages/single-album/single-album";

const App = () => {
  return(
    <AlbumsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-project" element={<Home />} />
        <Route path="/album/:id" element={<SingleAlbum />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AlbumsProvider>
  );
};

export default App;
import { Route, Routes } from "react-router-dom"
import AlbumsProvider from "./contexts/albums";
import Login from "./pages/login/login"
import NotFound from "./pages/not-found/not-found";

const UnauthApp = () => { 

  return(
    <AlbumsProvider>  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AlbumsProvider>
  )
}

export default UnauthApp;
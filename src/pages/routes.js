import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Sobre from "../components/sobre";




export default function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/sobre" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    );
  };
  
 
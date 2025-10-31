import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./common/Navbar";
import AboutMiembros from "./common/AboutMiembros";
import Login from "./common/Login";
import Proyecto2 from "./components/Proyecto2/Proyecto2";
import Proyecto3 from "./components/Proyecto3/Proyecto3";
import Proyecto4 from "./components/Proyecto4/Proyecto4";
import Proyecto5 from "./components/Proyecto5/Proyecto5";
import DesktopNavbar from "./common/Navbar";

function App() {
  return (
    <Router>
      <DesktopNavbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/" element={<AboutMiembros />} />
        <Route path="/login" element={<Login />} />
        <Route path="/proyecto2" element={<Proyecto2 />} />
        <Route path="/proyecto3" element={<Proyecto3 />} />
        <Route path="/proyecto4" element={<Proyecto4 />} />
        <Route path="/proyecto5" element={<Proyecto5 />} />
        <Routes path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
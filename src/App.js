import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Baterias from "./pages/Accesorios/Baterias/Baterias";
import Sabores from "./pages/Accesorios/Sabores/Sabores";
import Tanques from "./pages/Accesorios/Tanques/Tanques";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Baterias" element={<Baterias />} />
          <Route path="/Sabores" element={<Sabores />} />
          <Route path="/Tanques" element={<Tanques />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

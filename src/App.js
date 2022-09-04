import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Loggin from "./pages/Loggin/Loggin";
import { Vapes } from "./pages/Vapes/Vapes";
import { Coils } from "./pages/Coils/Coils";
import Baterias from "./pages/Accesorios/Baterias/Baterias";
import Sabores from "./pages/Accesorios/Sabores/Sabores";
import Tanques from "./pages/Accesorios/Tanques/Tanques";
import Fav from "./pages/Fav/Fav";


function App() {
  
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/loggin" element={<Loggin/>}/>
          <Route path="/vapes" element={<Vapes/>}/>
          <Route path="/coils" element={<Coils/>}/>
          <Route path="/baterias" element={<Baterias/>}/>
          <Route path="/sabores" element={<Sabores/>}/>
          <Route path="/tanques" element={<Tanques/>}/>
          <Route path="/favoritos" element={<Fav/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

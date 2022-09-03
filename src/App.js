import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
<<<<<<< HEAD
import Home from './pages/Home/Home';
import Baterias from "./pages/Accesorios/Baterias/Baterias";
import Sabores from "./pages/Accesorios/Sabores/Sabores";
import Tanques from "./pages/Accesorios/Tanques/Tanques";
=======
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Loggin from "./pages/Loggin/Loggin";
>>>>>>> ed370b59b24cbeb11e5e73940461e929ad950fe8

function App() {
  
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/Baterias" element={<Baterias />} />
          <Route path="/Sabores" element={<Sabores />} />
          <Route path="/Tanques" element={<Tanques />} />
=======
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/loggin" element={<Loggin/>}/>
>>>>>>> ed370b59b24cbeb11e5e73940461e929ad950fe8
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

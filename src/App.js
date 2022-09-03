import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Loggin from "./pages/Loggin/Loggin";
import { Vapes } from "./pages/Vapes/Vapes";


function App() {
  
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/loggin" element={<Loggin/>}/>
          <Route path="/vapes" element={<Vapes/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

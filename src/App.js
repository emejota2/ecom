import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
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
import Details from "./pages/Details/Details";
import CartPage from "./pages/Cart/CartPage";
import Administrador from "./pages/Administrador/Administrador";
import CheckPage from "./pages/checkout/CheckPage";
import { useContext } from "react";
import { Context } from "./Store/Store";




function App() {
 const {role} = useContext(Context)
 console.log(role)
  return (
    <>
   
      {role === undefined ? <Navbar/>: role === '3' ?  <Navbar/> : ''}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/loggin" element={<Loggin/>}/>
          <Route path="/vapes" element={<Vapes/>}/>
          <Route path="/coils" element={<Coils/>}/>
          <Route path="/detalle/:id" element={<Details/>}/>
          <Route path="/baterias" element={<Baterias/>}/>
          <Route path="/sabores" element={<Sabores/>}/>
          <Route path="/tanques" element={<Tanques/>}/>
          <Route path="/favoritos" element={<Fav/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/administrador" element={<Administrador />} />
          <Route path="/checkout" element={<CheckPage/>}/>
        </Routes>
       {role === undefined ? <Footer/>:role === '3' ? <Footer/> : ''}

    </>
  );
}

export default App;

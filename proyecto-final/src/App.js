import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carrousel/Carousel';
import Seccion from './components/Secciones/Seccion';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Seccion/>
    <Footer/>
    </>
  );
}

export default App;

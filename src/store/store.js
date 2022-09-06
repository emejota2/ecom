import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const Context = createContext(null);
const UserProvider = ({children}) =>{
    const [producto, setProducto] = useState([]);
    const [favoritos, setFavoritos] = useState([])
    const [fav, setFav] = useState(0)

    const obtenerdatos = async () => {
      const response = await axios.get(
        `https://backendvape.herokuapp.com/products`
      );
      setProducto(response.data.data);
      console.log(response.data.data);
    };
    

    const favAdd = (vape) => {
      let addvape = favoritos.find(m => m.id === vape.id);
      
      if(addvape){
        alert("El vape ya esta agregada")
        setFavoritos([...favoritos])
  
      } else{
        setFav(fav+1)
        setFavoritos([...favoritos, {...vape}])
      }
    };
    const borrarfav = (id) => {
      setFav(fav-1)
      return setFavoritos(favoritos.filter((m) => m.id !== id))
  }


  
    useEffect(() => {
      obtenerdatos();
    }, []);


    return(
        <Context.Provider value={{producto, favAdd, borrarfav, setFavoritos, favoritos}}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider;


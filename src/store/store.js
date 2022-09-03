import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const Context = createContext(null);
const UserProvider = ({children}) =>{
    const [producto, setProducto] = useState([]);

    const obtenerdatos = async () => {
      const response = await axios.get(
        `https://backendvape.herokuapp.com/products`
      );
      setProducto(response.data.data);
      console.log(response.data.data);
    };
  
    useEffect(() => {
      obtenerdatos();
    }, []);


    return(
        <Context.Provider value={{producto}}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider;


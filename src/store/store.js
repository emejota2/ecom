import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const Context = createContext(null);
const UserProvider = ({children}) =>{
    const [userinfo, setUserinfo] = useState({
      first_name:'',
      last_name:'',
      username:'',
      password:'',
      gender:'',
      birthdate:'',
      address:'',
      country:'',
      province:'',
      city:'',
      zip:'',
      email:'',
      phone_code:'',
      telephone:'',
      tc:''
    })

    const data = userinfo
    const [price, setPrice] = useState([])
    const [producto, setProducto] = useState([]);
    const [favoritos, setFavoritos] = useState([])
    const [cart, setCart] = useState([])
    const [fav, setFav] = useState(0)
// Funcion para obtener los productos guardados en la BD
    const obtenerdatos = async () => {
      const response = await axios.get(
        `https://backendvape.herokuapp.com/products`
      );
      setProducto(response.data.data);
      console.log(response.data.data);
    };

//Funcion para poder enviar el formulario de registro a la BD para la creacion de usuarios
    const crearDatos = async ()=>{
      const response = await axios.post(`https://backendvape.herokuapp.com/users/signup`, data)
      console.log(response)
      
    }
//Funcion para agregar favoritos
    const favAdd= (vape) => {
      let addvape = favoritos.find(m => m.id === vape.id);
      
      if(addvape){
        alert("El vape ya esta agregada")
        setFavoritos([...favoritos])
  
      } else{
        setFav(fav+1)
        setFavoritos([...favoritos, {...vape}])
      }
    };
//Funcion para borrar favoritos
    const borrarfav = (id) => {
      setFav(fav-1)
      return setFavoritos(favoritos.filter((m) => m.id !== id))
  }

// Funcion para captar los valores en entrada en el formulario de registro
  const handleChange = async (e)=>{
    await setUserinfo({
      
        ...userinfo,
        [e.target.name]: e.target.value
      
    })
  }

  //Funcion para agregar al carrito
  const cartAdd= (vape) => {
    let addvape = cart.find(m => m.id === vape.id);
    
    if(addvape){
      alert("El vape ya esta agregado al carrito")
      setCart([...cart])

    } else{
      
      setCart([...cart, {...vape}])
    }
  };
  //funcion para borrar articulos en el carrito
  const deleteCart = (id) => {
    
    return setCart(cart.filter((m) => m.id !== id))
}

const itemcart = (price) =>{
   price.reduce((amount, vap) => vap.price = amount, 0)
}
  
    useEffect(() => {
      obtenerdatos();
    }, []);


    return(
        <Context.Provider value={{ crearDatos ,handleChange ,producto, favAdd, borrarfav, setFavoritos, favoritos, cartAdd, deleteCart, cart, itemcart}}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider;


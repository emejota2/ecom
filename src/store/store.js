import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Context = createContext(null);
const UserProvider = ({ children }) => {
  const [userinfo, setUserinfo] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    gender: "",
    birthdate: "",
    address: "",
    country: "",
    province: "",
    city: "",
    zip: "",
    email: "",
    phone_code: "",
    telephone: "",
    tc: "",
  });
  const [user, setUser] = useState({
    email:'',
    password:''
  })
  const data = userinfo;
  const log = user
  const [precioFinal, setPreciofinal] = useState([]);
  const [producto, setProducto] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState(0);
  const [item, setItem] = useState(1);
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const usuario = Cookies.get('usuario')
  const role = Cookies.get('role')




  // Funcion para obtener los productos guardados en la BD
  const obtenerdatos = async () => {
    const response = await axios.get(
      `https://backendvape.herokuapp.com/products`
    );
    setProducto(response.data.data);
    console.log(response.data.data);
  };

  //Funcion para poder enviar el formulario de registro a la BD para la creacion de usuarios
  const crearDatos = async () => {
    const response = await axios.post(
      `https://backendvape.herokuapp.com/users/signup`,
      data
    );
    console.log(response);
  };


  const loggin = async () =>{
    setError('')
    console.log(log)
   
    const response = await axios.post(
      `https://backendvape.herokuapp.com/users/signin`,
      log)
    console.log(response.data)
    if(response.data.error){
      return setError(response.data.msg)
    } else {
      if(response.data.permission === 'ADMIN'){
        Cookies.set('usuario', response.data.data[0].username)
        Cookies.set('role', response.data.data[0].permissions)
      navigate('/administrador')
      } else {
        Cookies.set('usuario', response.data.data[0].username)
        Cookies.set('role', response.data.data[0].permissions)
        navigate('/')
      }
      
    }
  }



  //Funcion para agregar favoritos
  const favAdd = (vape) => {
    let addvape = favoritos.find((m) => m.id === vape.id);

    if (addvape) {
      alert("El vape ya esta agregada");
      setFavoritos([...favoritos]);
    } else {
      setFav(fav + 1);
      setFavoritos([...favoritos, { ...vape }]);
    }
  };
  //Funcion para borrar favoritos
  const borrarfav = (id) => {
    setFav(fav - 1);
    return setFavoritos(favoritos.filter((m) => m.id !== id));
  };

  // Funcion para captar los valores en entrada en el formulario de registro
  const handleChange = async (e) => {
    await setUserinfo({
      ...userinfo,
      [e.target.name]: e.target.value,
    });
  };

  const userlog = async (e) => {
    await setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };


  //Funcion para agregar al carrito
  const cartAdd = (vape) => {
    let addvape = cart.find((m) => m.id === vape.id);

    if (addvape) {
      alert("El vape ya esta agregado al carrito");
      setCart([...cart]);
    } else {
      setCart([...cart, { ...vape, quantity: 1 }]);
    }
    console.log(cart);
  };
  //funcion para borrar articulos en el carrito
  const deleteCart = (id) => {
    return setCart(cart.filter((m) => m.id !== id));
  };

  // funcion para agregar productos dentro del carrito
  const increaseQuantityById = (vape) => {
    const buscar = cart.find((product) => product.id === vape.id);
    console.log(buscar);
    if (buscar) {
      setCart(
        cart.map((product) => {
          if (product.id === vape.id) {
            return { ...buscar, quantity: buscar.quantity + 1 };
          } else return product
        })
      );
    } else {
      setCart([...cart, { ...vape, quantity: 1 }]);
    }
  };
  const deleteItemFromCart = (vape) => {
    const buscar = cart.find((product) => product.id === vape.id);
    console.log(buscar);
    if (buscar) {
      setCart(
        cart.map((product) => {
          if (product.id === vape.id) {
            return { ...buscar, quantity: buscar.quantity - 1 };
          } else return product
        })
      );
    } else {
      setCart([...cart, { ...vape.id, quantity: 1 }]);
    }
  };

    const checkUser = () => {
      if(usuario === undefined){
        navigate('/loggin')
      }
    }
    const checkRole = () => {
      if(role !== '2'){
        alert('no tiene permiso para entrar a esta pagina')
        navigate('/')
      }
    }

    const sining = () =>{
      navigate('/loggin')
    }

    const singout = () =>{
      Cookies.remove('usuario')
      Cookies.remove('role')
      navigate('/')
    }
   const total = cart.reduce((prev, current) => prev + current.quantity * current.price, 0)
  useEffect(() => {
    obtenerdatos();
    checkUser();
    
  }, []);

  return (
    <Context.Provider
      value={{
        increaseQuantityById,
        deleteItemFromCart,
        crearDatos,
        handleChange,
        producto,
        favAdd,
        borrarfav,
        setFavoritos,
        favoritos,
        cartAdd,
        deleteCart,
        cart,
        item,
        total,
        precioFinal,
        fav,
        userlog,
        loggin,
        error,
        checkUser,
        usuario,
        role,
        checkRole,
        sining,
        singout
        
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserProvider;

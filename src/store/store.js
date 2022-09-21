import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import BackenStore from "./BackenStore";

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

  const [check, setCheck] = useState({
    first_name: "",
    last_name: "",
    birthdate: "",
    address: "",
    country: "",
    province: "",
    city: "",
    email: "",
    phone_code: "",
    telephone: "",
    quantity:'',
    model: '',

  })
  console.log(check)
  
  const [precioFinal, setPreciofinal] = useState([]);
  const [producto, setProducto] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState(0);
  const [item, setItem] = useState(1);
  const [error, setError] = useState('')
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const usuario = Cookies.get('usuario')
  const role = Cookies.get('role')
  const address = Cookies.get('address')
  const firstName = Cookies.get('first_name')
  const lastName = Cookies.get('last_name')
  const city = Cookies.get('city')
  const email = Cookies.get('email')
  const tel = Cookies.get('telephone')
  const country = Cookies.get('country')
  const province= Cookies.get('province')

  const {loggin, crearDatos, obtenerdatos, checkout} = BackenStore(setProducto, setError, Cookies, userinfo, user, navigate, check, cart)


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

  const cartCheck = async (e) => {
    await setCheck({
      ...check,
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

  //funcion para fitrar por precio

   
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

    const checkAdmin = () =>{
      if(role === '2'){
        navigate('/administrador')
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
   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);
  useEffect(() => {
    obtenerdatos();
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
        singout,
        show,
        handleShow,
        handleClose,
        navigate,
        cartCheck,
        address,
        firstName,
        lastName,
        tel,
        city,
        email,
        country,
        province,
        checkout,
        setProducto,
        setFav,
        setError,
        Cookies,
        checkAdmin,
        filtro,
        setFilter,
        filter,
        selectedFilter
      }}
    >
      {children}
    </Context.Provider>
  );
  
};

export default UserProvider;

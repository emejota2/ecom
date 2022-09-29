
import { createContext, useState } from "react";
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
 

  const [check, setCheck] = useState({
    first_name: Cookies.get('first_name') === null ? '': Cookies.get('first_name') ,
    last_name: Cookies.get('last_name') === null ? '': Cookies.get('last_name'),
    birthdate: Cookies.get('birthdate') === null ? '': Cookies.get('birthdate'),
    address: Cookies.get('address') === null ? '': Cookies.get('address'),
    country: Cookies.get('country') === null ? '': Cookies.get('country'),
    province: Cookies.get('province') === null ? '': Cookies.get('province'),
    city: Cookies.get('city') === null ? '':  Cookies.get('city'),
    email: Cookies.get('email') === null ? '': Cookies.get('email'),
    phone_code: Cookies.get('phone_code') === null ? '': Cookies.get('phone_code'),
    telephone: Cookies.get('telephone') === null ? '': Cookies.get('telephone'),
    quantity:Cookies.get('quantity') === null ? '': Cookies.get('quantity'),
    model: Cookies.get('model') === null ? '': Cookies.get('model'),

  })

  
  const [precioFinal, setPreciofinal] = useState([]);
  
  const [favoritos, setFavoritos] = useState([]);
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState(0);
  const [item, setItem] = useState(1);
  const [error, setError] = useState('')
  const [show, setShow] = useState(false);
  const [prod, setProd] = useState({})
  
  
  const navigate = useNavigate()
  let usuario= Cookies.get('first_name');
  const role = Cookies.get('role')
  
  const total = cart.reduce((prev, current) => prev + current.quantity * current.price, 0)
  const {allusers, setAllusers,productoinfocap, loggin, crearDatos, obtenerdatos, checkout, getorderDetails, orderDetails, getorders, orders, producto, setProducto, user,setOrders, setUser, userlog, setOrderDetails} = BackenStore(setShow, setError, Cookies, userinfo,  check, cart, total)

  const ordenes = (id) =>{
    setShow(true)
    let odernscard = orders.filter((or) =>or.id == id)
    if(odernscard){
        console.log(odernscard[0])
        setProd(odernscard[0])
} else console.log('nada')}
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
  console.log(producto)

 

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

  let Vape = producto.filter((vape) => vape.category === 'vapes')


  const handleClick = (e) => {
    console.log(producto)
    if(e.target.value === 'precioAsc') {
      Vape.sort(function (a,b){
        return (a.price - b.price)
      })

        setProducto(Vape)
        return Vape
    }

    if(e.target.value === 'precioDesc'){
      Vape.sort(function (a, b){
        return(b.price - a.price)
      })
      setProducto(Vape)
        return Vape
    }
  }

   
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
  
   
  
   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);

   const removeCookie = () =>{
    Cookies.remove('role')
    Cookies.remove('first_name') 
    Cookies.remove('last_name')
    Cookies.remove('birthdate')
    Cookies.remove('address')
 Cookies.remove('country')
    Cookies.remove('province')
    Cookies.remove('city')
Cookies.remove('email')
    Cookies.remove('phone_code')
    Cookies.remove('telephone')
    Cookies.remove('quantity')
Cookies.remove('model')
   }
  

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
        checkout,
        setProducto,
        setFav,
        setError,
        Cookies,
        check,
        handleClick,
        Vape,
        getorderDetails,
        orderDetails,
        setOrderDetails,
        getorders, 
        orders,
        ordenes, obtenerdatos,
        setShow, prod,
        setUser, user,
        setOrders,
        productoinfocap,
        removeCookie,
       
        allusers, setAllusers
       
      }}
    >
      {children}
    </Context.Provider>
  );
  
};

export default UserProvider;

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { BASE_URL } from "../utils/utils";

export const Context = createContext(null);
const UserProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState({});
  const [allusers, setAllusers] = useState([]);
  const [orders, setOrders] = useState({});
  const [producto, setProducto] = useState([]);
  const [precioFinal, setPreciofinal] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState(0);
  const [item, setItem] = useState(1);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  const [prod, setProd] = useState({});
  const [edad, setEdad] = useState(false);
  const [productinfo, setProductinfo] = useState({
    brand: "",
    model: "",
    description: "",
    information: "",
    price: "",
    stock: "",
    type: "",
    image: "",
    category: "",
    active: "1",
  });
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
    first_name: Cookies.get("first_name") === null ? "" : Cookies.get("first_name"),
    last_name: Cookies.get("last_name") === null ? "" : Cookies.get("last_name"),
    birthdate: Cookies.get("birthdate") === null ? "" : Cookies.get("birthdate"),
    address: Cookies.get("address") === null ? "" : Cookies.get("address"),
    country: Cookies.get("country") === null ? "" : Cookies.get("country"),
    province: Cookies.get("province") === null ? "" : Cookies.get("province"),
    city: Cookies.get("city") === null ? "" : Cookies.get("city"),
    email: Cookies.get("email") === null ? "" : Cookies.get("email"),
    phone_code:Cookies.get("phone_code") === null ? "" : Cookies.get("phone_code"),
    telephone:Cookies.get("telephone") === null ? "" : Cookies.get("telephone"),
    quantity: Cookies.get("quantity") === null ? "" : Cookies.get("quantity"),
    model: Cookies.get("model") === null ? "" : Cookies.get("model"),
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [actProduct, setActProduct] = useState({
    id: "",
    active: "",
  });

  // Funcion para obtener los productos guardados en la BD
  const obtenerdatos = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    setProducto(response.data.data);
    console.log(response.data.data);
  };

  //Funcion para poder enviar el formulario de registro a la BD para la creacion de usuarios
  const crearDatos = async () => {
    const response = await axios.post(`${BASE_URL}/users/signup`, data);
    console.log(response);
  };

  const loggin = async () => {
    setError("");
    console.log(log);

    const response = await axios.post(`${BASE_URL}/users/signin`, log);

    if (response.data.error) {
      return setError(response.data.msg);
    } else {
      if (response.data.data[0].permissions === "2") {
        Cookies.set("usuario", response.data.data[0].username);
        Cookies.set("role", response.data.data[0].permissions);
        Cookies.set("address", response.data.data[0].address);
        Cookies.set("first_name", response.data.data[0].first_name);
        Cookies.set("last_name", response.data.data[0].last_name);
        Cookies.set("email", response.data.data[0].email);
        Cookies.set("city", response.data.data[0].city);
        Cookies.set("telephone", response.data.data[0].telephone);
        navigate("/administrador");
      } else {
        Cookies.set("usuario", response.data.data[0].username);
        Cookies.set("role", response.data.data[0].permissions);
        Cookies.set("address", response.data.data[0].address);
        Cookies.set("first_name", response.data.data[0].first_name);
        Cookies.set("last_name", response.data.data[0].last_name);
        Cookies.set("email", response.data.data[0].email);
        Cookies.set("city", response.data.data[0].city);
        Cookies.set("telephone", response.data.data[0].telephone);
        Cookies.set("country", response.data.data[0].country);
        Cookies.set("province", response.data.data[0].province);
        navigate("/");
      }
    }
  };
  const total = cart.reduce(
    (prev, current) => prev + current.quantity * current.price,
    0
  );
  const info = {
    user: check,
    products: cart,
    total,
  };
  const checkout = async () => {
    console.log(info);
    const response = await axios.post(`${BASE_URL}/orders/neworder`, info);
    console.log(response);
  };

  const getorderDetails = async () => {
    const response = await axios.get(`${BASE_URL}/orders/detail`);
    setOrderDetails(response.data.data);
    console.log(response.data.data);
  };

  const getorders = async () => {
    const response = await axios.get(`${BASE_URL}/orders/`);
    setOrders(response.data.data);
    console.log(response.data.data);
  };
  console.log(orders);

  const getallusers = async () => {
    const response = await axios.get(`${BASE_URL}/users/`);
    setAllusers(response.data.data);
    console.log(response.data.data);
  };

  const newProducts = async () => {
    const response = await axios.post(`${BASE_URL}/products/newproduct`, pr);
    console.log(response.data);
    if (response.data.error) {
      return console.log(response.data);
    }
  };
  const productoinfocap = async (e) => {
    await setProductinfo({
      ...productinfo,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  let usuario = Cookies.get("first_name");
  const role = Cookies.get("role");

  const data = userinfo;
  const pr = productinfo;
  const userlog = async (e) => {
    await setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const stateproducto = async (e) => {
    await setActProduct({
      ...actProduct,
      [e.target.name]: e.target.value,
    });
  };

  const estado = actProduct;
  console.log(estado);
  const log = user;

  const productoactivo = async () => {
    const response = await axios.put(
      `${BASE_URL}/products/${actProduct.id}`,
      estado
    );
    console.log(response);
  };
  const fun = () => {
    getorders();
    obtenerdatos();
  };

  useEffect(() => {
    fun();
    obtenerdatos();
    getallusers();
  }, []);

  const ordenes = (id) => {
    setShow(true);
    let odernscard = orders.filter((or) => or.id == id);
    if (odernscard) {
      console.log(odernscard[0]);
      setProd(odernscard[0]);
    } else console.log("nada");
  };
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
  console.log(producto);

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

  //funcion para filtrar por precio los Vapes

  let Vape = producto.filter((vape) => vape.category === "vapes");

  const handleClickVapes = (e) => {
    console.log(producto);
    if (e.target.value === "precioAsc") {
      Vape.sort(function (a, b) {
        return a.price - b.price;
      });

      setProducto(Vape);
      return Vape;
    }

    if (e.target.value === "precioDesc") {
      Vape.sort(function (a, b) {
        return b.price - a.price;
      });
      setProducto(Vape);
      return Vape;
    }
  };

  //funcion para filtrar por precio los Coils

  let Resistencias = producto.filter(
    (coil) => coil.category === "resistencias"
  );
  console.log(Resistencias);

  const handleClickResistencias = (e) => {
    console.log(producto);
    if (e.target.value === "precioAsc") {
      Resistencias.sort(function (a, b) {
        return a.price - b.price;
      });

      setProducto(Resistencias);
      return Resistencias;
    }

    if (e.target.value === "precioDesc") {
      Resistencias.sort(function (a, b) {
        return b.price - a.price;
      });
      setProducto(Resistencias);
      return Resistencias;
    }
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
          } else return product;
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
          } else return product;
        })
      );
    } else {
      setCart([...cart, { ...vape.id, quantity: 1 }]);
    }
  };

  const checkUser = () => {
    if (usuario === undefined) {
      navigate("/loggin");
    }
  };
  const checkRole = () => {
    if (role !== "2") {
      alert("no tiene permiso para entrar a esta pagina");
      navigate("/");
    }
  };

  const sining = () => {
    navigate("/loggin");
  };

  const singout = () => {
    Cookies.remove("usuario");
    Cookies.remove("role");
    navigate("/");
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const removeCookie = () => {
    Cookies.remove("role");
    Cookies.remove("first_name");
    Cookies.remove("last_name");
    Cookies.remove("birthdate");
    Cookies.remove("address");
    Cookies.remove("country");
    Cookies.remove("province");
    Cookies.remove("city");
    Cookies.remove("email");
    Cookies.remove("phone_code");
    Cookies.remove("telephone");
    Cookies.remove("quantity");
    Cookies.remove("model");
  };

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
        Vape,
        getorderDetails,
        orderDetails,
        setOrderDetails,
        getorders,
        orders,
        ordenes,
        obtenerdatos,
        setShow,
        prod,
        setUser,
        user,
        setOrders,
        productoinfocap,
        removeCookie,
        allusers,
        setAllusers,
        handleClickResistencias,
        Resistencias,
        handleClickVapes,
        newProducts,
        getallusers,
        status,
        setStatus,
        stateproducto,
        productoactivo,
        edad,
        setEdad,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserProvider;

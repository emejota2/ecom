import React, { useEffect, useState } from 'react'
import axios from "axios";
import { BASE_URL } from '../utils/utils';
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";



export default function BackenStore( setError,  userinfo,  check, cart, total)  {
  
  const data = userinfo;
  const [productinfo, setProductinfo] = useState({
    brand: "",
    model: "",
    description: "",
    information: "",
    price: "",
    stock: "",
    type: "",
    image: "",

  });
  
  const pr = productinfo
  console.log(pr)
  const productoinfocap = async (e) => {
    await setProductinfo({
      ...productinfo,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate()
  const [orderDetails, setOrderDetails] = useState({})
  const [allusers, setAllusers] = useState([])
  const [orders, setOrders] = useState({})
  const [producto, setProducto] = useState([]);
  const [user, setUser] = useState({
    email:'',
    password:''
  })
  const userlog = async (e) => {
    await setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const log = user
  
  // Funcion para obtener los productos guardados en la BD
  const obtenerdatos = async () => {
    const response = await axios.get(
      `${BASE_URL}/products`
    );
    setProducto(response.data.data);
    console.log(response.data.data);
  };



  //Funcion para poder enviar el formulario de registro a la BD para la creacion de usuarios
  const crearDatos = async () => {
    const response = await axios.post(
      `${BASE_URL}/users/signup`,
      data
    );
    console.log(response);
  };


  const loggin = async () =>{
    setError('')
    console.log(log)
   
    const response = await axios.post(
      `${BASE_URL}/users/signin`,
      log)
 
    if(response.data.error){
      return setError(response.data.msg)
    } else {
      if(response.data.data[0].permissions === '2'){
        Cookies.set('usuario', response.data.data[0].username)
        Cookies.set('role', response.data.data[0].permissions)
        Cookies.set('address', response.data.data[0].address)
        Cookies.set('first_name', response.data.data[0].first_name)
        Cookies.set('last_name', response.data.data[0].last_name)
        Cookies.set('email', response.data.data[0].email)
        Cookies.set('city', response.data.data[0].city)
        Cookies.set('telephone', response.data.data[0].telephone)
        navigate('/administrador')
      } else {
        Cookies.set('usuario', response.data.data[0].username)
        Cookies.set('role', response.data.data[0].permissions)
        Cookies.set('address', response.data.data[0].address)
        Cookies.set('first_name', response.data.data[0].first_name)
        Cookies.set('last_name', response.data.data[0].last_name)
        Cookies.set('email', response.data.data[0].email)
        Cookies.set('city', response.data.data[0].city)
        Cookies.set('telephone', response.data.data[0].telephone)
        Cookies.set('country', response.data.data[0].country)
        Cookies.set('province', response.data.data[0].province)
        navigate('/')
      }
      
    }
  }
  const info = {
    user: check,
    products: cart,
    total
  }
  const checkout = async () => {
    const response = await axios.post(
      `${BASE_URL}/orders/neworder`, info
    )
    console.log(response)
    console.log(info)
  };

  const getorderDetails = async () =>{
    const response = await axios.get(`${BASE_URL}/orders/detail`)
    setOrderDetails(response.data.data)
    console.log(response.data.data)
  }

  const getorders = async () =>{
    const response = await axios.get(`${BASE_URL}/orders/`)
    setOrders(response.data.data)
    console.log(response.data.data)
  }
  console.log(orders)

  const getallusers = async () =>{
    const response = await axios.get(`${BASE_URL}/users/`)
    setAllusers(response.data.data)
    console.log(response.data.data)
  }
  
const fun = ()=>{
  getorders()
  obtenerdatos()
}


useEffect(() => {
  fun();
  obtenerdatos()
  getallusers()
  
}, []);



  return (
    {allusers, setAllusers,productoinfocap, loggin, checkout, crearDatos, obtenerdatos, getorderDetails, orderDetails, getorders, orders,setOrders, producto, setProducto, user, setUser, userlog, setOrderDetails}
  )
}



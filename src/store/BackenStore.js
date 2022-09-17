import React from 'react'
import axios from "axios";
import { BASE_URL } from '../utils/utils';



export default function BackenStore(setProducto, setError, Cookies, userinfo, user, navigate, check, cart)  {
  
  const data = userinfo;
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
    console.log(response.data)
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
    products: cart
  }
  const checkout = async () => {
    const response = await axios.post(
      `${BASE_URL}/orders/neworder`, info
    )
    console.log(response)
    console.log(info)
  };


  return (
    {loggin, checkout, crearDatos, obtenerdatos}
  )
}



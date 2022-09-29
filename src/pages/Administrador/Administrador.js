import React, { useContext } from 'react'
import HomeAdmin from '../../components/Homeadmin/HomeAdmin'
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin'
import NewProduct from '../../components/NewProduct/NewProduct'
import OrderModal from '../../components/OrderModal/OrderModal'
import OrderTable from '../../components/OrderTable/OrderTable'
import ProductTable from '../../components/ProductTable/ProductTable'
import UpProduct from '../../components/UpdateProduct/UpProduct'
import UserTable from '../../components/usertable/UserTable'
import { Context } from '../../Store/Store'

const Administrador = () => {
  const {checkRole, orderDetails, producto, allusers,  status} = useContext(Context)
  
  checkRole()
  
  return (
    <>
    <OrderModal/>
    <NavbarAdmin />
    {orderDetails.length > 0 ? (
      orderDetails.map((vape) => (
        <OrderTable
          key={vape.id}
          vape={vape}
          {...vape}
        />
      ))
    ) : producto.length > 0 ? (
      producto.map((vape) => (
        <ProductTable
          key={vape.id}
          vape={vape}
          {...vape}
        />
      ))
    ) : 
    allusers.length > 0 ? (
      allusers.map((vape) => (
        <UserTable
          key={vape.id}
          vape={vape}
          {...vape}
        />
      ))): status===true?<NewProduct/>:status===false?<UpProduct/>:status===null?<HomeAdmin/>:''}
   
  
  </>
  )
}

export default Administrador
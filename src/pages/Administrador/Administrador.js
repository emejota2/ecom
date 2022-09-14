import React, { useContext } from 'react'
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin'
import { Context } from '../../Store/Store'

const Administrador = () => {
  const {checkRole} = useContext(Context)
  checkRole()
  return (
    <NavbarAdmin />
  )
}

export default Administrador
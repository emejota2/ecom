import React, { useContext } from 'react'
import { Context } from '../../Store/Store'
import { Modal, Button } from "react-bootstrap";

const OrderModal = (props) => {
    const {show,setShow, prod} = useContext(Context)
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const {details} = props
    const {id, email, delivery_adress, city, province, user, telephone, merchant_delivery, total }=prod
  return (
    <>
   

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='modaltext'>Orden</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modaltext'>id:{id} user:{user}, email:{email}, delivery_adress:{delivery_adress}, city:{city}, province:{province}, telephone:{telephone}, merchant_delivery:{merchant_delivery}, total:{total}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default OrderModal
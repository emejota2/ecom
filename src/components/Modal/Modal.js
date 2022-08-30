import React, {useState} from "react";

import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import './Modal.css'
  
const Modals = () => {
  const [show, setShow] = useState(true);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      
  
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='modal'
      >
        
        <Modal.Header closeButton className="modalbody">
          <Modal.Title><h4 className="modaltitulo">BIENVENIDO</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <h4 className="modaltext">To use the Vaporesso website you must be aged 21 years or over. Please verify your age before entering the site.
We use cookies to improve our website and your experience browsing it. By continuing to browse our website you accept our Cookie Policy.</h4>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-dark" onClick={handleClose}>
            SOY MAYOR
          </button>
          <button className="btn btn-dark">
           <Link className="textboton" to='/'> SOY MENOR </Link> 
          </button>
            
        </Modal.Footer>
      </Modal>
      
    </>
  );
}
  
export default Modals;
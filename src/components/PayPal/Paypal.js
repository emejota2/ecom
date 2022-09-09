import React, { useContext, useState } from 'react'
import ReactDOM from "react-dom"
import { Context } from '../../Store/Store';


const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Paypal = () => {
    const {total, precioFinal} = useContext(Context)
    const [price, setPrice] = useState(0)
    const createOrder=(data, actions)=> {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: total
              },
            },
          ],
        });
      }
      const onApprove=(data, actions) =>{
        return actions.order.capture(alert('Pago procesado exitosamente'));
      };

    
      const handleChange = (e) =>{
        setPrice(e.target.value)
      }

      



  return (
    <div className='container'>
        <h2>Ingrese la cantidad a pagar</h2>
        <input type='text' onChange={handleChange} value={total}></input>
        <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </div>
  )
}

export default Paypal
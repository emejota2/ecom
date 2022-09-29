import React, { useContext } from "react";
import { Context } from "../../Store/Store";

const UpProduct = () => {
  const {stateproducto,productoactivo}= useContext(Context)
  return (
    <div className="container">
      <label>ingrese el id</label>
      <input name="id" onChange={stateproducto}/>
      <label>1=activo o 0=inactivo</label>
      <input name="active" onChange={stateproducto}/>
      <button onClick={productoactivo}>Actualizar</button>
    </div>
  );
};

export default UpProduct;

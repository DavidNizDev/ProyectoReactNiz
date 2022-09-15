import { Link } from "react-router-dom"
import React from "react";

const Item = ({ item }) => {
  return (
    <div className="tarjetas col-xl-3 mx-auto my-5 d-flex flex-column align-items-center">
      <h4><b>{item.name}</b></h4>
      <img src={item.pictureURL} className='col-xl-10' width="150px" alt={item.name} />
      <div>
        <h4><b>Precio: </b>$ {item.price}</h4>
        <h4><b>Disponibles:</b> {item.stock}</h4>
        <Link to={`/detalle/${item.id}`} className="btn botonDetalle">Ver detalle</Link>
      </div>
    </div>
  )
}
export default Item
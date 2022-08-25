import { Link } from "react-router-dom"
import React from "react";

const Item = ({ item }) => {

  return (
    <section className="item">
      <h2>{item.name}</h2>
      <img src={item.pictureURL} width="150px" alt={item.name} />
      <div>
        <h3>Descripción: {item.description}</h3>
        <h3>Categoría: {item.category}</h3>
        <h3>Precio: {item.price}</h3>
        <h3>Stock: {item.stock}</h3>
        <Link to={`/detalle/${item.id}`} className="item__button">Ver detalle</Link>
      </div>
    </section>
  )
}
export default Item
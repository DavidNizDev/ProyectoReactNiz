import { Link } from "react-router-dom"
import React from "react";

const Item = ({ item }) => {
  const { productoConId } = item;

  return (
    <section className="item">
      <h2>{productoConId.name}</h2>
      <img src={productoConId.pictureURL} width="150px" alt={productoConId.name} />
      <div>
        <h3>Descripción: {productoConId.description}</h3>
        <h3>Categoría: {productoConId.category}</h3>
        <h3>Precio: {productoConId.price}</h3>
        <h3>Stock: {productoConId.stock}</h3>
        <Link to={`/detalle/${productoConId.id}`} className="item__button">Ver detalle</Link>
      </div>
    </section>
  )
}
export default Item
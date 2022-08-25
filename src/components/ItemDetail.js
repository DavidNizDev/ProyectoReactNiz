import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"
import React from "react"


function ItemDetail({ detalle }) {

  const [qty, setQty] = useState(1)

  const { isInCart, addItem } = useContext(CartContext)

  const onAdd = () => {
    isInCart(detalle.id)
    addItem(detalle, qty)
  }
  return (
    <div>
      <div>ItemDetail
        <img src={detalle.pictureURL} alt={detalle.name}></img>
      </div>
      <div>
        <h3 className='detailTitle'>{detalle.name}</h3>
        <h3>Categoria: {detalle.category}</h3>
        <h3>${detalle.price}</h3>
        <h3>Unidades disponibles: {detalle.stock}</h3>
      </div>
      <div>
        <ItemCount qty={qty} setQty={setQty} stock={detalle.stock} onAdd={onAdd} />
      </div>
    </div>
  )
}
export default ItemDetail;
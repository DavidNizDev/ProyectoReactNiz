import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"
import { Row } from 'react-bootstrap'

function ItemDetail({ item }) {
  const [qty, setQty] = useState(1)
  const { isInCart, addItem } = useContext(CartContext)
  const onAdd = () => {
    isInCart(item.id)
    addItem(item, qty)
  }
  return (
    <Row className='detailView justify-content-center'>
      <div className='col-xl-3 d-flex align-items-center '>
        <img src={item.pictureURL} alt={item.name} width={250}></img>
      </div>
      <div className="col-xl-3 d-flex flex-column align-items-center justify-content-center">
        <h4 className='detailTitle'>{item.name}</h4>
        <h3><b>$</b> {item.price}</h3>
        <h4><b>Disponibles:</b> {item.stock}</h4>
      </div>
      <div className='col-xl-3 d-flex flex-column align-items-center justify-content-center'>
        <ItemCount qty={qty} setQty={setQty} stock={item.stock} onAdd={onAdd} />
      </div>
      <div className="d-flex col-xl-9">
        <h4>{item.description}</h4>
      </div>
    </Row>
  )
}
export default ItemDetail;
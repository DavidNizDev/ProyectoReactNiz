import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import Template from "./Template"
import Checkout from "./Checkout"

const Cart = () => {

  const [checkout, setCheckout] = useState(false)
  const [contadorPadre, setContadorPadre] = useState(0)
  const { cart, deleteItem, emptyCart } = useContext(CartContext)

  const handleClick = (e) => {
    console.log(e.target);
  }
  const handleChange = (e) => {
    console.log(e.target);
  }

  if (cart.length > 0) {
    return (
      <div>
        <div>
          {
            cart.map((element, index) => {
              return <div key={index}>
                <div>
                  <img src={element.pictureURL} alt={element.name} />
                </div>
                <div>
                  <h3>{element.name}</h3>
                  <h3>Precio: ${element.price}</h3>
                  <h3>Unidades: {element.qty}</h3>
                </div>
                <div>
                  <button onClick={() => deleteItem(element.id)}>Delete</button>
                </div>
              </div>
            })
          }
          <button onClick={() => emptyCart()}>Vaciar carrito</button>
        </div>
        <div>
          {
            !checkout
              ? <button onClick={() => setCheckout(true)}>Ir al Checkout</button>
              : <Checkout />
          }
        </div>
      </div>
    )
  }

  return (
    <>
      <Template titulo="Carrito" subtitulo="Es tu carrito">
        <Link to={"/"}><button>Volver al inicio</button></Link>
      </Template>
    </>
  )
}
export default Cart



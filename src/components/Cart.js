import { useState } from "react";
import ItemCount from "./ItemCount";
import Template from "./Template"

const Cart = () => {

  const handleClick = (e) => {
    console.log(e.target);
  }
  const handleChange = (e) => {
    console.log(e.target);
  }

  const [contadorPadre, setContadorPadre] = useState(0)

  return (
    <>
      <Template titulo="Carrito" subtitulo="Es tu carrito">
        <ul>
          <h1>prueba</h1>
        </ul>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Clicka</button>
      </Template>
        <h4>El contador va : {contadorPadre}</h4>
        <ItemCount contadorPadre={contadorPadre} setContadorPadre={setContadorPadre} />
    </>
  )
}
export default Cart



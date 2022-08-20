import { useState } from "react"
import ItemCount from "./ItemCount"
import Page from "./Page"



const Cart = () => {

  const handleClickDiv = (e) => {
    e.stopPropagation()
    console.log("Click div")
    console.log(e.currentTarget)
  }

  const handleChange = (e) => {
    console.log(e.target)
  }

  /* const handleClick = () => {
    console.log("Primero")

    return () => {
      console.log("Segundo")
    }
  } */

  //const res = handleClick()
  //fn == operacion (1+1)
  //return ==  resultado (2)

  const handleClickDefault = (e) => {
    e.preventDefault()
    console.log("No redirecciono...")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("validando...")
  }

  const handleKeyDown = (e) => {
    console.log(e.key)
    //e.preventDefault()
  }

  //State Uplifting 

  const [estadoPadre, setEstadoPadre] = useState(0)

  const customMethod = (param) => {
    setEstadoPadre(param)
  }

  return (
    <Page titulo="Carrito" subtitulo="Compra y vende">

      <p id="parrafo">El Contador va : {estadoPadre}</p>

      <ItemCount estadoPadre={estadoPadre} customMethod={customMethod} />

      {/* <Slider estadoPadre={estadoPadre} setEstadoPadre={setEstadoPadre}/> */}


      {/*  <a onClick={handleClickDefault} href="http://google.com">click</a> */}
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onKeyDown={handleKeyDown} onChange={handleChange} />
        <button>click</button>
      </form> */}
    </Page>
  )
}

export default Cart
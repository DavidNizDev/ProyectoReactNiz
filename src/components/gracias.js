import { useContext } from 'react'
import { CartContext } from '../context/CartContext.js'

const Gracias = () => {

  const { mostrarNumeroPedido } = useContext(CartContext)



  return (
    <>
      <div className='contGracias'>
        <p>Tu pedido fue realizado con éxito! Gracias por tu compra!</p>
        <div className='numeroPedido'>

          <p>Número de pedido:<br /><b className='numPedido'>{mostrarNumeroPedido()}</b></p>
        </div>
      </div>
    </>

  )
}

export default Gracias
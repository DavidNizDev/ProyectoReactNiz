import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from "../firebaseApp"
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import Template from './Template';

const Cart = () => {

  const nuevoId = Math.round(Math.random() * 99999999)

  const navigate = useNavigate();

  const { cart, total, deleteItem, emptyCart, guardarNumeroPedido } = useContext(CartContext)

  const handleClear = () => {
    emptyCart()
  }

  const terminarCompra = (e) => {
    const orden = {
      buyer: { ...costumer },
      items: cart,
      date: serverTimestamp(),
      total: total,
      id: nuevoId,
      estado: "En preparación."
    }

    e.preventDefault()
    const ordenesCollection = collection(db, "order")
    const nuevaOrden = addDoc(ordenesCollection, orden)

    nuevaOrden
      .then(resultado => {
        guardarNumeroPedido(nuevoId)
        emptyCart()
        navigate('../Gracias');
      })
      .catch((err) => {
        console.log(err);
      })

  }
  const [costumer, setCostumer] = useState({
    name: '',
    lastname: '',
    email: '',
    address: ''
  })

  const handlerChangeInput = (e) => {
    setCostumer({
      ...costumer,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div className='row col-xl-12'>
        {cart.length >= 1 ? (
          <ul className='carrito'>
            <Template titulo="Tu carrito">
              {cart.map(item => (
                <li key={item.id} className='cartItem col-xl-6 d-flex align-items-center justify-content-evenly'>
                  <img src={item.pictureURL} width={150} alt={item.name}></img>
                  <div className='info'>
                    <h4>{item.name}</h4>
                  </div>
                  <div className='precio d-flex'>
                    <p><span>{item.cantidadSeleccionada}</span> x $ {item.price}</p>
                  </div>
                  <div className='total d-flex'>
                    <p>$ {item.cantidadSeleccionada * item.price}</p>
                  </div>
                  <div className='borrar'>
                    <button onClick={() => { deleteItem(item.id) }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))
              }
              <div className='barratotal'>
                <p>Total: <b>$ {total}</b></p>
              </div>
              <div className='col-xl-4'>
                <h4><b>Completa tus datos</b></h4>
                <form onSubmit={terminarCompra}>
                  <input
                    placeholder='Nombre'
                    name='name'
                    value={costumer.name}
                    onChange={handlerChangeInput}
                  />
                  <input
                    placeholder='Apellido'
                    name='lastname'
                    value={costumer.lastname}
                    onChange={handlerChangeInput}
                  />
                  <input
                    placeholder='Correo Electrónico'
                    name='email'
                    value={costumer.email}
                    onChange={handlerChangeInput}
                    required
                  />
                  <input
                    placeholder='Domicilio'
                    name='address'
                    value={costumer.address}
                    onChange={handlerChangeInput}
                  />
                  <button type="submit" className='btn btn-primary px-4 py-2 ms-auto mb-3'>FINALIZAR COMPRA</button>
                </form>
              </div>
              <button className='btn btn-secondary px-4 py-2 ms-auto' onClick={handleClear}>LIMPIAR CARRITO</button>
            </Template>
          </ul>

        ) : (

          <ul className='carrito'>
            <p>Tu carrito esta vacío.</p>
            <Link to="/" className='btn btn-primary px-4 py-2 ms-auto'>Ir a la tienda</Link>
          </ul>
        )}
      </div>
    </>
  )

}

export default Cart

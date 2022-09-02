import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { db } from "../firebaseApp";
import { collection, addDoc } from "firebase/firestore";
import { useCarrito } from "./CustomProvider";

function Checkout() {

    const { carrito } = useCarrito()
    console.log(carrito);
    const [costumer, setCostumer] = useState({
        name: '',
        lastname: '',
        email: '',
        address: ''
    })
    console.log(costumer);
    const [submit, setSubmit] = useState(false)

    const { cart, getItemPrice } = useContext(CartContext)

    const navigate = useNavigate()

    const handlerChangeInput = (e) => {
        setCostumer({
            ...costumer,
            [e.target.name]: e.target.value,
        })
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        const orderCollection = collection(db, "order");
        const consulta = addDoc(orderCollection, order)

        const order = {
            items: carrito,
            buyer: { ...costumer },
            price: getItemPrice(),
            date: new Date(),
            total: 0
        }

        setSubmit(true)
    }

    if (cart.length === 0) {

        setTimeout(() => {
            navigate('/')
        }, 500)

        return (
            <div>
                <h1>No deberías estár acá, no tenés productos en el carrito.</h1>
                <h2>Serás redirigido al Inicio en 3 segundos...</h2>
            </div>
        )
    }

    return (
        <div className='col-xl-4'>
            <h2>Complete tus datos</h2>
            <form onSubmit={handlerSubmit}>
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
                />
                <input
                    placeholder='Domicilio'
                    name='address'
                    value={costumer.address}
                    onChange={handlerChangeInput}
                />
                <button type='submit' className='btn btn-success'>Confirmar Compra!</button>
            </form>
            <hr />
            {
                submit
                && <div>
                    <h2>Los datos ingresados son:</h2>
                    <h4>Nombre: {costumer.name}</h4>
                    <h4>Apellido: {costumer.lastname}</h4>
                    <h4>Correo Electrónico: {costumer.email}</h4>
                    <h4>Domicilio: {costumer.address}</h4>
                </div>
            }
        </div>
    )
}

export default Checkout
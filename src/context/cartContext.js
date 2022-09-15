import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)
    const [numeropedido, setNumeropedido] = useState(0)


    const addItem = (producto, cantidadSeleccionada) => {

        const copiaCarrito = [...cart]
        const itemAlCarrito = { ...producto, cantidadSeleccionada }

        if (isInCart(producto.id)) {
            const index = copiaCarrito.findIndex(item => item.id === producto.id)
            copiaCarrito[index].cantidadSeleccionada += cantidadSeleccionada
        } else {
            copiaCarrito.push(itemAlCarrito)
        }
        setCart(copiaCarrito)

        setCantidad(cantidad + cantidadSeleccionada)
        let nuevoTotal = Number(producto.price) * cantidadSeleccionada
        setTotal(total + nuevoTotal)

    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const deleteItem = (idBorrar) => {
        const copiaCarrito2 = [...cart]
        const index = copiaCarrito2.findIndex(item => item.id === idBorrar)
        const totalProducto = copiaCarrito2[index].price * copiaCarrito2[index].cantidadSeleccionada
        setTotal(total - totalProducto)
        setCantidad(cantidad - copiaCarrito2[index].cantidadSeleccionada)
        const copiaCarrito = cart.filter((item) => item.id !== idBorrar);
        setCart(copiaCarrito)
    }

    const emptyCart = () => {
        setCart([])
        setCantidad(0)
        setTotal(0)
    }

    const guardarNumeroPedido = (pedido) => {
        setNumeropedido(pedido)
    }

    const mostrarNumeroPedido = () => {
        return numeropedido
    }

    const valorDelContexto = {
        cart,
        cantidad,
        total,
        deleteItem,
        addItem,
        emptyCart,
        isInCart,
        guardarNumeroPedido,
        mostrarNumeroPedido,
        numeropedido
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}

export default MyProvider


/* import { createContext, useState } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    const addItem = (item, qty) => {
        const newItem = {
            ...item,
            qty
        }
        if (isInCart(newItem.id)) {
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].qty += qty
            setCart(auxArray)

        } else {
            setCart([...cart, newItem])
        }
    }

    const emptyCart = () => {
        return setCart([])
    }

    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }

    const getItemQty = () => {
        return cart.reduce((acumulador, x) => acumulador += x.qty, 0)
    }

    const getItemPrice = () => {
        return cart.reduce((acumulador, x) => acumulador += x.qty * x.price, 0)
    }


    return <Provider value={{ cart, addItem, isInCart, emptyCart, deleteItem, getItemQty, getItemPrice, total }}>{children}</Provider>
}

export default MyProvider */
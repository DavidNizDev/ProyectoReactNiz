import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;


const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        carrito.push()
        //si estaEnCarrito() entonces...
        setCantidad(cantidad + producto.cantidad)
    }

    const eliminarProducto = () => { }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (id) => {
        //retrun true/false
    }

    const valorDelContexto = {
        cantidad: cantidad,
        carrito: carrito,
        agregarProducto,
        eliminarProducto,
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default CustomProvider;
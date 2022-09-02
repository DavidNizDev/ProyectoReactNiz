import { useContext } from "react";
import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

export const useCarrito = () => {
    const contextValue = useContext(contexto)
    return contextValue
}

const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([
        {
            id: 1,
            nombre: "Prod 1",
            precio: 342
        }
    ]);

    const agregarProducto = (producto) => {
        carrito.push()
        setCantidad(cantidad + producto.cantidad)
    }

    const eliminarProducto = () => { }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (id) => {
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
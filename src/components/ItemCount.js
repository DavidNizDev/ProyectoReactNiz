import { useState } from "react";

const ItemCount = ({ contadorPadre, setContadorPadre, stock, initial }) => {
    const [contadorHijo, setContadorHijo] = useState(0)
    const [confirmed, setConfirmed] = useState(false)

    const sumaCont = () => {
        setContadorHijo(contadorHijo + 1);
    }
    const restaCont = () => {
        setContadorHijo(contadorHijo - 1);
    }
    const confirmar = () => {
        setContadorPadre(contadorHijo)
    }

    return (

        <div>
            <h3>El contador va: {contadorHijo}</h3>
            <button onClick={sumaCont}>Add</button>
            <button onClick={confirmar}>Confirmar</button>
            <button onClick={restaCont}>Remove</button>
        </div>
    )
}
export default ItemCount;
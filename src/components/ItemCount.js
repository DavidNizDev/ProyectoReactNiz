import { useState } from "react";

const ItemCount = ({ estadoPadre, onAdd, stock, initial }) => {
    const [contador, setContador] = useState(0)
    const [confirmed, setConfirmed] = useState(false)

    const sumaCont = () => {
        setContador(contador + 1);
    }
    const restaCont = () => {
        setContador(contador - 1);
    }
    const confirmar = () => {
        onAdd(contador)
    }

    return (

        <div>
            <h3>El contador va: {contador}</h3>
            <button onClick={sumaCont}>Add</button>
            <button onClick={confirmar}>Confirmar</button>
            <button onClick={restaCont}>Remove</button>
        </div>
    )
}
export default ItemCount;
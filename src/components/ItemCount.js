import { useState } from "react";

function ItemCount() {
    const [contador, setContador] = useState(0)


    function sumaCont() {
        if (contador < 5) {
            setContador(contador + 1);
        } else {
            alert("max stock");
        }
    }


    function restaCont() {
        if (contador > 0) {
                    setContador(contador - 1);
        }
    }
    function resetCont() {
        setContador(0)
    }
    console.log(contador);
    return (

        <>
            <h2>Stock: 5</h2>
            <h3>El contador va: {contador}</h3>
            <button onClick={sumaCont}>Add</button>
            <button onClick={resetCont}>Reset</button>
            <button onClick={restaCont}>Rest</button>
        </>
    )
}
export default ItemCount;
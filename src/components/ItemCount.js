import React from "react"

function ItemCount({ qty, setQty, stock, onAdd }) {

    const handlerMinus = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    const handlerPlus = () => {
        if (qty < stock) {
            setQty(qty + 1)
        }
    }

    return (
        <>
            <div className=''>
                <button onClick={handlerMinus}>-</button>
                <div>
                    <p>{qty}</p>
                </div>
                <button onClick={handlerPlus}>+</button>
            </div>
            <button className='' onClick={() => { onAdd() }}>Agregar al carrito</button>
        </>
    )
}
export default ItemCount;
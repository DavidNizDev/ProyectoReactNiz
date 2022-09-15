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
            <div className='d-flex col-xl-6 justify-content-evenly mb-3'>
                <button className={`btn ${qty > 1 ? "btn-success" : "btn-danger"}`} onClick={handlerMinus}>-</button>
                <div>
                    <p>{qty}</p>
                </div>
                <button className={`btn ${qty < stock ? "btn-success" : "btn-danger"}`} onClick={handlerPlus}>+</button>
            </div>
            <button className='btn btn-primary' onClick={() => { onAdd() }}>Agregar al carrito</button>
        </>
    )
}
export default ItemCount;
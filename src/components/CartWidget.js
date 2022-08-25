import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"



const CartWidget = () => {


    const { getItemQty } = useContext(CartContext)

    return (
        <Link to="/cart" content={getItemQty()}>
            <span className="material-symbols-outlined" >
                shopping_cart
            </span>
        </Link>
    )
}
export default CartWidget
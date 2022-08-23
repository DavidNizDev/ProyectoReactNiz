import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../context/CartContext"



const CartWidget = () => {


    const { getItemQty } = useContext(CartContext)

    return (
        <NavLink to="/cart" content={getItemQty()}>
            <span className="material-symbols-outlined" >
                shopping_cart
            </span>
        </NavLink>
    )
}
export default CartWidget
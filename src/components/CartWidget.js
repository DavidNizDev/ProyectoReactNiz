
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "./CustomProvider"


const CartWidget = () => {

    const { cantidad } = useContext(contexto)

    return (
        <NavLink to="/cart">
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            {cantidad}
        </NavLink>
    )
}
export default CartWidget
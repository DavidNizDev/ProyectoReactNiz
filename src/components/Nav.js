import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"

const Nav = ({ type }) => {
  if (type == "header") {
    return (
      <nav>
        <NavLink to="/categoria/categoria1">Categoria1</NavLink>
        <NavLink to="/categoria/categoria2">Categoria2</NavLink>
        <NavLink to="/categoria/categoria3">Categoria3</NavLink>
        <CartWidget/>
      </nav>
    )
  } else {
    return (
      <nav className="footerNav">
        <Link to="#">link1-footer</Link>
        <Link to="#">link2-footer</Link>
        <Link to="#">link3-footer</Link>
      </nav>
    )
  }

}
export default Nav
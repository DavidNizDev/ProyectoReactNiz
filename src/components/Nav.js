import { Link, NavLink } from "react-router-dom";


const Nav = ({ type }) => {
  if (type == "header") {
    return (
      <nav>
        <NavLink to="/categoria/1">Categoria1</NavLink>
        <NavLink to="/categoria/2">Categoria2</NavLink>
        <NavLink to="/categoria/3">Categoria3</NavLink>
        <NavLink to="/cart">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </NavLink>
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
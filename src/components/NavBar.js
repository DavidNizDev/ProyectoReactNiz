import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"
import { useState } from "react";
import { products } from "../products"
import { useEffect } from "react";

const NavBar = ({ type }) => {

  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {

  })

  if (type == "header") {
    return (
      <nav>
        <NavLink to="/categoria/categoria1">Categoria1</NavLink>
        <NavLink to="/categoria/categoria2">Categoria2</NavLink>
        <NavLink to="/categoria/categoria3">Categoria3</NavLink>
        <CartWidget />
      </nav>
    )
  }

}
export default NavBar


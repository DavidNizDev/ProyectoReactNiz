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

/* Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
    at NavBar (http://localhost:3000/static/js/bundle.js:1472:5)
    at header
    at Header
    at MyProvider (http://localhost:3000/static/js/bundle.js:1691:5)
    at Router (http://localhost:3000/static/js/bundle.js:41595:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:40404:5)
    at App */
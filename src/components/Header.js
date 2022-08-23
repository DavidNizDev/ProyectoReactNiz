import { Link } from "react-router-dom"
import NavBar from "./NavBar"

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__titulo" >Titulo</h1>
      </Link>
      <NavBar type="header" />
    </header>
  )
}
export default Header;
import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__titulo" >Titulo</h1>
      </Link>
      <Nav type="header" />
    </header>
  )
}
export default Header;
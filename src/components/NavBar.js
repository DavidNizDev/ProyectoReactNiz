import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";
import { db } from "../firebaseApp";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from 'react-bootstrap';
import { PropagateLoader } from 'react-spinners'

const NavBar = () => {

  const [loading, setLoading] = useState(true)
  const [categorias, setCategorias] = useState([])

  useEffect(() => {

    const productosCollection = collection(db, "productos")
    const consulta = getDocs(productosCollection)

    consulta
      .then((resultado) => {
        const arrayCategorias = resultado.docs.map((doc) => {
          return doc.data().category
        });
        const arrayCategoriasUnicas = arrayCategorias.filter((item, index) => {
          return arrayCategorias.indexOf(item) === index;
        })
        setCategorias(arrayCategoriasUnicas)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="d-flex justify-content-evenly">
      <PropagateLoader color="rgba(63, 55, 215, 1)" />
    </div>
  } else {
    return (
      <Navbar>
        <Container>
          <Nav className="col-xl-8 d-flex justify-content-evenly mx-auto align-items-center">
            <div className="col-xl-8 d-flex justify-content-evenly mx-auto align-items-center">
              <Link to="/" className="text-decoration-none titulo">
                <h1>CarpinSHOP</h1></Link>
            </div>
            <div className="col-xl-8 d-flex justify-content-evenly mx-auto align-items-center">
              <ul className="d-flex align-items-center m-0">
                {categorias.map((categoria) => {
                  return <h5 className="mx-1 text-capitalize" key={categoria}><NavLink to={`/categoria/${categoria}`} className="categNav text-decoration-none py-2 px-3">{categoria}</NavLink></h5>
                })}
              </ul>
            </div>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar >
    )
  }
}

export default NavBar


/* import { Link, } from "react-router-dom";
import CartWidget from "./CartWidget"
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = ({ }) => {

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="col-xl-8 d-flex justify-content-evenly mx-auto align-items-center">
          <div className="col-xl-8 d-flex justify-content-evenly mx-auto align-items-center">
            <Link to="/" className="text-decoration-none">
              <h1>CarpinSHOP</h1></Link>
          </div>
          <div className="col-xl-8 d-flex justify-content-evenly mx-auto align-items-center">
            <Link to="/categoria/mates" className="text-decoration-none categNav">Mates</Link>
            <Link to="/categoria/peluches" className="text-decoration-none categNav">Peluches</Link>
            <Link to="/categoria/varios" className="text-decoration-none categNav">Varios</Link>
            <CartWidget />
          </div>
        </Nav>
      </Container>
    </Navbar>
  )

}
export default NavBar
 */

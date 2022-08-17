import ItemListContainer from "./ItemListContainer"
import { Routes, Route } from "react-router-dom"
import Cart from "./Cart"
import Categoria1 from "./Categoria1"
import Categoria2 from "./Categoria2"
import Categoria3 from "./Categoria3"
import ItemDetailContainer from "./ItemDetailContainer"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/Categoria1" element={<Categoria1 />} />
                <Route path="/Categoria2" element={<Categoria2 />} />
                <Route path="/Categoria3" element={<Categoria3 />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/detalle/1" element={<ItemDetailContainer />} />

            </Routes>
        </main>
    )
}
export default Main 

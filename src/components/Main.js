import ItemListContainer from "./ItemListContainer"
import { Routes, Route } from "react-router-dom"
import Cart from "./Cart"
import ItemDetailContainer from "./ItemDetailContainer"
import Gracias from "./gracias"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer greeting={"Bienvenido/a a la tienda online del carpincho"} />} />
                <Route path="/categoria/:category" element={<ItemListContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                <Route path="/Gracias" element={<Gracias />} />
            </Routes>
        </main>
    )
}
export default Main 

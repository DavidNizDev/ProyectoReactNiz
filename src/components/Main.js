import ItemListContainer from "./ItemListContainer"
import { Routes, Route } from "react-router-dom"
import Cart from "./Cart"
import ItemDetailContainer from "./ItemDetailContainer"
import Checkout from "./Checkout"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:id" element={<ItemListContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </main>
    )
}
export default Main 

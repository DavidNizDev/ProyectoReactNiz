import { Route, Routes } from "react-router-dom"
import Item from "./Item"
import ItemDetailContainer from "./ItemDetailContainer"

const ItemList = ({ listProduct }) => {
  return (
    <section className="items">
      {listProduct.map(productito => <Item productito={productito} key={productito.id} />)}

    </section>
  )
}
export default ItemList
import ItemCount from "./ItemCount"
import { useContext } from "react"
import { contexto } from "./CustomProvider"

const ItemDetail = ({ item }) => {

  const { agregarProducto } = useContext(contexto)
  const onAdd = (contador) => {
    item.cantidad = contador
    agregarProducto(item)
  }
  return (
    <>
      <h1>{item.title}</h1>
      <img className="detailImage" src={item.image} alt="" />
      <p>{item.description}</p>
      <ItemCount onAdd={onAdd} />
    </>
  )
}
export default ItemDetail
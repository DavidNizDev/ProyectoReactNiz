import Item from "./Item"

const ItemList = ({ listProduct }) => {
  return (
    <>
      {listProduct.map(productito => <Item productito={productito} key={productito.id} />)}
    </>
  )
}
export default ItemList
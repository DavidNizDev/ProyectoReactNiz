import Item from "./Item";
import React from "react";

const ItemList = ({ listaProduct }) => {
  return (
    <div className='items'>
      {listaProduct.map((element, index) => {
        return <Item key={index} item={element} />
      })}
    </div>
  )
}

export default ItemList
/* const ItemList = ({ listProduct }) => {
  return (
    <div className="items">
      {listProduct.map(productito => <Item productito={productito} key={productito.id} />)}

    </div>
  )
} */
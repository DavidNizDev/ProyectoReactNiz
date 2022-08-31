import Item from "./Item";
import React from "react";

const ItemList = ({ listProduct }) => {
  
  return (
    <div className='items'>
      {listProduct.map((item, index) => {
        return <Item key={index} item={item} />
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
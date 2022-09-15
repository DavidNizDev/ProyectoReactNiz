import Item from "./Item";
import React from "react";

const ItemList = ({ listProduct }) => {

  return (
    <div className='row col-xl-11 mx-auto'>
      {listProduct.map((item) => {
        return <Item key={item.id} item={item} />
      })}
    </div>
  )
}

export default ItemList
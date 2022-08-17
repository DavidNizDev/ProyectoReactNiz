import { promesa } from "../promesa";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState()
  useEffect(() => {
    promesa(itemDetail)
      .then(data => setItemDetail(data))
  }, {})

  return (
    <>
      <ItemDetail itemDetail={itemDetail} />
    </>
  )
}
export default ItemDetailContainer
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { products } from "../products";
/*       <ItemDetail itemDetail={itemDetail} />
 */

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({})
  const { productId } = useParams();

  useEffect(() => {

    setTimeout(() => {

      fetch(products)
        .then(data => setDetalle(data.find(x => x.id === productId)))

    }, 500)

  }, [])

  return (
    <>
      <div>ItemDetailConteiner</div>
      <div>
        <ItemDetail detalle={detalle} />
      </div>
    </>
  )
}
export default ItemDetailContainer
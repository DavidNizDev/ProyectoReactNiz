import { promesa } from "../promesa";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
/*       <ItemDetail itemDetail={itemDetail} />
 */

const ItemDetailContainer = () => {
  const params = useParams();
  console.log(params);
  const [itemDetail, setItemDetail] = useState()
  useEffect(() => {
    promesa(itemDetail)
      .then(data => setItemDetail(data))
  }, [])

  return (
    <>
      <div>ItemDetailCOnteiner</div>
    </>
  )
}
export default ItemDetailContainer
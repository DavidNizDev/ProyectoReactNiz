import React from "react";
import ItemDetail from "./ItemDetail.js"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseApp";
import { collection, query, where, getDocs } from "firebase/firestore";
import { PropagateLoader } from 'react-spinners'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const { id } = useParams();


  useEffect(() => {
    const productosCollection = collection(db, "productos");
    const filtroProductos = query(productosCollection, where("id", "==", id));
    const consulta = getDocs(filtroProductos)
    consulta
      .then((res) => {
        const asd = res.docs[0].data()
        setItem(asd)

      })
      .catch((err) => {
        console.log(err);
      })
  }, [id])

  return (
    <div>
      {Object.keys(item).length < 1
        ? <div className="d-flex justify-content-evenly">
          <PropagateLoader color="rgb(161, 21, 3)" />
        </div>
        : <ItemDetail item={item} />}
    </div>
  )
}
export default ItemDetailContainer;


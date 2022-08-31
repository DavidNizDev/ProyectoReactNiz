import React from "react";
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseApp";
import { collection, getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    const referencia = doc(productosCollection, id)
    const consulta = getDoc(referencia)

    consulta
      .then((res) => {
        setDetalle(res.data())
      })
      .catch((err) => {
        console.log(err);
      })
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
export default ItemDetailContainer;

/*       {Object.keys(detalle).length < 1
        ? <div>ItemDetailConteiner</div>
        : <ItemDetail detalle={detalle} />
      } */
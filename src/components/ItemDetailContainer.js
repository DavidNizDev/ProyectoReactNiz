import React from "react";
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({})
  const { productId } = useParams();
  const urlJson = "https://mocki.io/v1/f8cf64ad-a41d-410d-8468-0b3ddcd4269d"

  useEffect(() => {
    fetch(urlJson)
      .then(response => response.json())
      .then(data => setDetalle(data.find(x => x.id === productId)))
      .catch((err) => {
        console.log(err)
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
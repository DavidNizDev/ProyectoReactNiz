import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Template from "./Template";
import { db } from "../firebaseApp";
import { collection, getDocs, query, where } from "firebase/firestore";



function ItemListContainer({ }) {
    const [listProduct, setListProduct] = useState([]);

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const productosCollection = collection(db, "productos");
        if (!id) {
            const consulta = getDocs(productosCollection)

            consulta
                .then(res => {
                    const productos = res.docs.map(doc => {
                        const productoConId = {
                            ...doc.data()
                        }
                        productoConId.id = doc.id
                        return {
                            productoConId
                        }
                    })
                    setListProduct(productos)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            const filtroCategory = query(productosCollection, where("category", "==", id))
            const consulta = getDocs(filtroCategory)


            consulta
                .then(res => {
                    const productos = res.docs.map(doc => {
                        const productoConId = {
                            ...doc.data()
                        }
                        productoConId.id = doc.id
                        return {
                            productoConId
                        }
                    })
                    setListProduct(productos)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [id])

    return (
        <>
            <Template titulo="Catalogo" subtitulo="Productos principales">
                <ItemList listProduct={listProduct} />
            </Template>
        </>
    );
}


export default ItemListContainer;
import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Template from "./Template";
import { db } from "../firebaseApp";
import { collection, getDocs, query, where } from "firebase/firestore";
import { PropagateLoader } from 'react-spinners'
import { Row, Col } from 'react-bootstrap'

function ItemListContainer({ greeting }) {
    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(true)
    const { category } = useParams();


    useEffect(() => {
        const collectionProductos = collection(db, "productos")
        const consulta = getDocs(collectionProductos)

        if (category) {
            const filtroDeLaConsulta = query(collectionProductos, where("category", "==", category))
            const filtrado = getDocs(filtroDeLaConsulta)
            filtrado
                .then((resultado) => {
                    const productosMapeados = resultado.docs.map((doc) => {
                        return doc.data()
                    })
                    setListProduct(productosMapeados)
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            consulta
                .then((res) => {
                    const productos = res.docs.map((doc) => {
                        return doc.data()
                    });
                    setListProduct(productos)
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [category])

    if (loading) {
        return <div className="d-flex justify-content-evenly">
            <PropagateLoader color="rgb(161, 21, 3)" />
        </div>
    } else {
        return <div>
            <Row>
                <Col xl={6} className="mx-auto mt-5 text-center"><h1>{greeting}</h1>
                    {(!category) ? <Template titulo="Productos principales"></Template> : <Template titulo={category}></Template>}
                </Col>
            </Row>
            <div>
                <ItemList listProduct={listProduct} />
            </div>
        </div>
    }

    /*     return (
            <div>
                <Row>
                    <Col xl={6} className="mx-auto mt-5 text-center"><h1>{greeting}</h1>
                        {(!category) ? <Template titulo="Productos principales"></Template> : <Template titulo={category}></Template>}
                    </Col>
                </Row>
                <div>
                    <ItemList listProduct={listProduct} />
                </div>
            </div>
        ); */
}

export default ItemListContainer;
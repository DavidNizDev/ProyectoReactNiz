import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Template from "./Template";


function ItemListContainer({ }) {
    const [listProduct, setListProduct] = useState([]);

    const { categorias } = useParams();

    const urlJson = "https://mocki.io/v1/f8cf64ad-a41d-410d-8468-0b3ddcd4269d"

    useEffect(() => {
        setTimeout(() => {
            fetch(urlJson)
                .then((respuesta) => respuesta.json())
                .then((array) => {
                    if (!categorias) {
                        setListProduct(array)
                    } else {
                        setListProduct(array.filter(x => x.category === categorias))
                    }
                }
                )
        }, 300)
    }, [categorias])

    return (
        <>
            <Template titulo="Catalogo" subtitulo="Productos principales">
                <ItemList listaProduct={listProduct} />
            </Template>
        </>
    );
}


export default ItemListContainer;
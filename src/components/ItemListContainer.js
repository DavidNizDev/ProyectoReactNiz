import ItemList from "./ItemList";
import { products } from "../products"
import { useEffect, useState } from "react";
import { promesa } from "../promesa";
import { useParams } from "react-router-dom";
import Template from "./Template";


function ItemListContainer() {
    const [listProduct, setListproduct] = useState([]);

    const { categorias } = useParams();

    useEffect(() => {
        promesa(products)
            .then((data) => {
                if (!categorias) {
                    setListproduct(data)
                } else {
                    setListproduct(data.filter(x => x.category === categorias))
                }
            })
    }, [])

    return (
        <>
            <Template titulo="Catalogo" subtitulo="Productos principales">
                <ItemList listProduct={listProduct} />
            </Template>
        </>
    );
}


export default ItemListContainer;
import ItemCount from "./ItemCount";

function ItemListContainer({ greeting }) {
    return <>
        <h2>Item List Container H2 Function</h2>
        <h2>{greeting}</h2>
        <ItemCount />
        </>;
}


export default ItemListContainer;
import { Link } from "react-router-dom"

const Item = ({ productito }) => {

  return (
    <article className="item">
      <h2>{productito.name}</h2>
      <img src={productito.pictureURL} width="150px" />
      <div>
        <h3>Descripción:</h3>{productito.description}
        <h3>Precio:</h3>{productito.price}
        <h3>Stock:</h3>{productito.stock}
        <Link to={`/detalle/${productito.id}`} className="item__button">Ver detalle</Link>
      </div>
    </article>
  )
}
export default Item
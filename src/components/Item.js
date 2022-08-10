const Item = ({ productito }) => {

  return (
    <>
      <h2>{productito.nombre}</h2>
      <img src={productito.imageUrl} width="150px" />
      <button>Ver description</button>
      {<div><h3>Descripción:</h3>{productito.description}
            <h3>Precio:</h3>{productito.price}
            <h3>Stock:</h3>{productito.stock}
      </div>
      }    </>
  )
}
export default Item
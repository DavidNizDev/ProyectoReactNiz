const Item = ({ productito }) => {

  return (
    <>
      <h2>{productito.nombre}</h2>
      <img src={productito.imageUrl} width="150px" />
      <button>Ver description</button>
      {<div><h3>Descripción:</h3>{productito.description}</div>
      }    </>
  )
}
export default Item
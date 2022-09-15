const Template = (props) => {
    return (
        <div className="divTituloTemplate">
                <h3 className="tituloTemplate">{props.titulo}</h3>
            <div className="contentTemplate">
                <h3>{props.children}</h3>
            </div>
        </div>
    )
}
export default Template
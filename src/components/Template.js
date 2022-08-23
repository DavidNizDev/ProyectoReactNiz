const Template = (props) => {
    return (
        <div className="template">
            <header className="headerTemplate">
                <h3>{props.titulo}</h3>
                <h3>{props.subtitulo}</h3>
            </header>
            <div className="contentTemplate">
                <h3>{props.children}</h3>
            </div>
        </div>
    )
}
export default Template
const Wrapper = (props) => {
    const bag = {
        padding: "20px",
        border: "1px solid azure",
        margin: "20px 0",
        color: "gray"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Wrapper
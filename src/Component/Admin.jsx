import AlertButton from "./AlertButton"

const Admin = (props) => {
    return (
        <div style={{ background: "props.color" }}>
            <h3>The current user is : {props.user}</h3>
            <AlertButton/>
        </div>
    )
}
export default Admin
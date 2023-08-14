const NonAdmin = (props) => {
    return (
        <div>
            <h3>The current user is : {props.user}</h3>
            <div>
                The id of the user is : {props.id}
            </div>
        </div>
    )
}
export default NonAdmin
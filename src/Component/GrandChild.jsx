const GrandChild = (props) => {
    
    return (
        <div>
            {props.heirarchy} and is an {props.status} user. This however is from the Grand Child component.
        </div>
    )
}

export default GrandChild
import GrandChild from './GrandChild'

const Child = (props) => {

    const grandChildProps = {...props, status: "Non Active"};

    return (
        <div> 
            This is a child component, but the attributes are coming from {props.name} and are coming from the <GrandChild {...grandChildProps} />.
        </div>
    )
} 

export default Child
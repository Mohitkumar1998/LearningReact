import NonAdmin from "./NonAdmin";
import Admin from "./Admin";
import Wrapper from "./Wrapper";

const Heading = () => {
    let title = "Hello World!!"
    return (
        <div>
            <h1>{title}</h1>
            <Wrapper children={
                    <div>
                        <Admin user="Admin" color="yellow"/>
                        <NonAdmin user="Not Admin" id="5"/>
                    </div>
                }
            />
        </div>
    )
}

export default Heading
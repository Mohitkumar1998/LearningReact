import Child from "./Child"

const Parent = () => {
    return (
        <div>
            <Child name="PName" heirarchy="parent" status="active" />
        </div>
    )
}

export default Parent
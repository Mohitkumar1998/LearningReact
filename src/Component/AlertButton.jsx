function Button({message, children}){
    function buttonClick() {
        alert(message);
    }

    return (
        <button onClick={buttonClick}>
            {children}
        </button>
    );
}

export default function AlertButton() {
    return (
        <div>
            <Button message="I am clicked.">
                Click Me!!
            </Button>
        </div>
    );
}
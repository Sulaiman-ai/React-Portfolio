

function Typewriter(props){
    return (
        <div className="typewriter">
            {[...props.text].map(
                (el) => <span className="letter">{el}</span>
            )}
            <div class="cursor"></div>
        </div>
    )
}

export default Typewriter;
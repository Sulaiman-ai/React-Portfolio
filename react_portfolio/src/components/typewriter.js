import {useEffect} from 'react';
import anime from "animejs";

function Typewriter(props){

    useEffect(()=>{
        const lettersSpan = document.getElementsByClassName("letter");

        let typewriter = anime.timeline({})

        typewriter.add({
        targets: '.typewriter .letter',
        opacity: [0,1],
        delay: anime.stagger(250),
        duration: 100,
        }, 1000)
        .add({
        targets: '.typewriter .cursor',
        translateX: function(){return [0, lettersSpan.length * lettersSpan[0].offsetWidth]},
        easing: function(){return `steps(${lettersSpan.length})`},
        duration: 250*9,
        }, 1000)

        let cursorBlick = anime({
        targets: '.typewriter .cursor',
        opacity: [0,1],
        delay: 300,
        loop: true,
        duration: 500,
        // autoplay: false,
        })
    }, [])

    return (
        <div className="typewriter">
            <div className="letters">
                {[...props.text].map(
                    (el) => <span className="letter">{el}</span>
                )}
            </div>
            <span class="cursor"></span>
        </div>
    )
}

export default Typewriter;
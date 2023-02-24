import Skills from "../components/skills";

function Home(){
    return (
        <div className="main">
        {/* Avatar */}
        <h1>Sulaiman Amjad</h1>
        <div>
            <p>Front-end Web Developer</p>
            <button>View CV</button>
            <Skills/>
            <p>Portfolio. Powered by ReactJS.</p>
        </div>
        
        </div>
    )
}

export default Home;
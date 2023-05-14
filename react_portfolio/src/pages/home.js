import Skills from "../components/skills";

function Home(){
    return (
        <div id="/" className="main home">
        {/* Avatar */}
        <div className="bio-section">
        <h1>Sulaiman Amjad</h1>
            {/* <p>Front-end Web Developer</p> */}
            <p className="bio">Full Stack Engineer with a passion for problem solving | Making your ideas real</p>
        </div>
        <img src={require("../icons/profile-pic.jpg")} className="pfp"></img>
            {/* <button>View CV</button> */}
            {/* <Skills/> */}
        </div>
    )
}

export default Home;
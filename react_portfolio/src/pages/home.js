import Skills from "../components/skills";

function Home(){
    return (
        <div id="/" className="main home">
        {/* Avatar */}
        <div className="bio-section">
        <h1>Sulaiman Amjad</h1>
            <p>Front-end Web Developer</p>
            <p className="bio">I am an enthusiastic and committed Software Engineer looking for roles in Full Stack Development.
I have experience with Python, JavaScript, HTML, CSS, React SQL, Node and Express.
I am passionate about problem solving, and using technology to improve peoples lives and provide efficient alternatives to deal with real life problems.
My aim is to constantly improve my skills a learn new technologies and technical solutions.</p>
        </div>
        <img src={require("../icons/profile-pic.jpg")} className="pfp"></img>
            {/* <button>View CV</button> */}
            {/* <Skills/> */}
        </div>
    )
}

export default Home;
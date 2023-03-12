import Project from "../components/project"
import projectData from "../data/data.json"

function Projects(){
    return (
        <div id="/projects" className="main">
        <h1>Projects</h1>
        <div className="projects-container">
        {projectData.map((e) => (
            <Project {...e}/>
        ))}
        </div>
        {/* <Project {...{name: "NucliHealth", deployed: "github.io", repo: "github.com"}}></Project> */}
        </div>
    )
}

export default Projects;
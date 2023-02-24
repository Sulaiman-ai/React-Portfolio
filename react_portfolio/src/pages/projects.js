import Project from "../components/project"
import projectData from "../data/data.json"

function Projects(){
    return (
        <div className="main">
        <h1>Projects</h1>
        {projectData.map((e) => (
            <Project {...e}/>
        ))}
        {/* <Project {...{name: "NucliHealth", deployed: "github.io", repo: "github.com"}}></Project> */}
        </div>
    )
}

export default Projects;
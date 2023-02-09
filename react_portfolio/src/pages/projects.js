import Project from "../components/project"

function Projects(){
    return (
        <>
        <h1>Projects</h1>
        <Project {...{name: "NucliHealth", deployed: "github.io", repo: "github.com"}}></Project>
        </>
    )
}

export default Projects;
function Project(props){
    return (
    <>
    {/* <h1>Project 1</h1> */}
    <div className="project-container">
    <img src={props.demosrc}/>
    <div className="project-details">
        <h2>{props.title}</h2>
        <p><a href={props.deployed} target="_blank">Deployed project</a></p>
        <p><a href={props.repo} target="_blank">GitHub Repo</a></p>
    </div>
    </div>
    </>
    )
}

export default Project;
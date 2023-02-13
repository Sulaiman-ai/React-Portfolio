function Project(props){
    return (
    <>
    {/* <h1>Project 1</h1> */}
    <h2>{props.title}</h2>
    <p><a href={props.deployed}>Deployed project</a></p>
    <p><a href={props.repo}>GitHub Repo</a></p>
    <img src={props.demosrc}/>
    {/* <Image></Image> */}
    </>
    )
}

export default Project;
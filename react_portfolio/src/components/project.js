function Project(props){
    return (
    <>
    <h1>Project 1</h1>
    <h2>{props.name}</h2>
    <p>Deployed project: {props.deployed}</p>
    <p>GitHub Repo: {props.repo}</p>
    {/* <Image></Image> */}
    </>
    )
}

export default Project;
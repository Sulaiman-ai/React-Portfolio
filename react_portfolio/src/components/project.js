// import { CBadge } from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css'

function Project(props){
    return (
    <>
    {/* <CBadge color="primary">NodeJS</CBadge> */}
    {/* <h1>Project 1</h1> */}
    <div className="project-card">
    <img className="project-thumbnail" src={props.demosrc}/>
    <div className="project-details">
        <h2>{props.title}</h2>
        <div className="project-links">
            <div><a href={props.repo} target="_blank">GitHub</a></div>
            <div><a href={props.deployed} target="_blank">View</a></div>
        </div>
        {/* <div className="project-description"></div> */}
        {/* <div className="project-skills"> */}
            {/* <Badge name="node.js"/> */}
            {/* {props.skills.map((e) => (
                <CBadge color="primary">{e}</CBadge>
            ))} */}
        {/* </div> */}
    </div>
    </div>
    </>
    )
}

export default Project;
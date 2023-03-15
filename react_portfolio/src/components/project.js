// import { CBadge } from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css'

function Project(props){
    return (
    <>
    {/* <CBadge color="primary">NodeJS</CBadge> */}
    {/* <h1>Project 1</h1> */}
    <div className="project-container">
    <img src={props.demosrc}/>
    <div className="project-details">
        <h2>{props.title}</h2>
        <div className="project-links">
            <p><a href={props.repo} target="_blank">Source Code</a></p>
            <p><a href={props.deployed} target="_blank">Application</a></p>
        </div>
        <div className="project-description"></div>
        <div className="project-skills">
            {/* <Badge name="node.js"/> */}
            {/* {props.skills.map((e) => (
                <CBadge color="primary">{e}</CBadge>
            ))} */}
        </div>
    </div>
    </div>
    </>
    )
}

export default Project;
import js_logo from "../icons/javascript-logo.svg";
// import html_logo from "../icons/html-logo.png";
import nodejs_icon from "../icons/nodejs-icon.svg";
import python_icon from "../icons/python-icon.svg";
import flask_icon from "../icons/pocoo_flask-icon.svg";
// import css_icon from "../icons/w3_css-icon.svg";
import html_icon from "../icons/w3_html5-icon.svg";
import jquery_icon from "../icons/jquery-vertical.svg";
import express_icon from "../icons/expressjs-icon.svg";

import Badge from "./badge";

function Skills(){
    return (
        <div className="skills section main">
            <div className="section-header skills-header">
                <h1>Skills</h1>
                {/* <button>More</button> */}
            </div>
            <div className="skills-content">
                <div className="frontend-section">
                    <h4>Front End</h4>
                    <img src={js_logo}/>
                    <img src={html_icon}/>
                    {/* <Badge icon={"flask"+"_icon"}/> */}
                    <p>JavaScript, HTML, CSS</p>
                </div>
                {/* <img src={css_icon}/> */}
                <div className="backend-languages">
                    <h4>Back End</h4>
                    <img src={nodejs_icon}/>
                    <img src={python_icon}/>
                    <p>NodeJS, Python</p>
                </div>
                <div className="servers">
                    <h4>Server Frameworks</h4>
                    <img src={flask_icon}/>
                    <img src={express_icon}/>
                    <p>Flask, ExpressJS</p>
                </div>
                <img src={jquery_icon}/>
            </div>
        </div>
    )
}

export default Skills;
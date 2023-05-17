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

import SkillCard from "./skill-card";

function Skills(){
    return (
        <div id="/skills" className="skills section main">
            {/* <FontAwesomeIcon icon="fa-brands fa-react" size="4x" border pull="left" /> */}
            
            <div className="section-header skills-header">
                <h1>Skills</h1>
                {/* <button>More</button> */}
            </div>
            <div className="skills-content">
                <div className="frontend-section">
                    <h4>Front End</h4>
                    <div className="skills-cards">
                        <SkillCard icon="fa-react" name="React"/>
                        <SkillCard icon="fa-html5" name="HTML5"/>
                        <SkillCard icon="fa-css3" name="CSS3"/>
                        <SkillCard icon="fa-js" name="JavaScript"/>
                    </div>

                    {/* <img src={js_logo}/>
                    <img src={html_icon}/> */}
                    {/* <Badge icon={"flask"+"_icon"}/> */}
                    {/* <p>JavaScript, HTML, CSS</p> */}
                </div>
                {/* <img src={css_icon}/> */}
                <div className="backend-languages">
                    <h4>Back End</h4>
                    <div className="skills-cards">
                        <SkillCard icon="fa-node" name="Node"/>
                        <SkillCard icon="fa-python" name="Python"/>
                    </div>

                    {/* <img src={nodejs_icon}/>
                    <img src={python_icon}/>
                    <p>NodeJS, Python</p> */}
                </div>
                <div className="servers">
                    <h4>Server Frameworks</h4>
                    <div className="skills-cards">
                        <img src={flask_icon}/>
                        <p>Flask</p>
                        <img src={express_icon}/>
                        <p>ExpressJS</p>
                    </div>
                </div>
                {/* <img src={jquery_icon}/> */}
            </div>
        </div>
    )
}

export default Skills;
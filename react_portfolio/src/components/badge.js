import js_logo from "../icons/javascript-logo.svg";
import nodejs_icon from "../icons/nodejs-icon.svg";
import python_icon from "../icons/python-icon.svg";
import flask_icon from "../icons/pocoo_flask-icon.svg";
import html_icon from "../icons/w3_html5-icon.svg";
import jquery_icon from "../icons/jquery-vertical.svg";
import express_icon from "../icons/expressjs-icon.svg";

function Badge(props){
    console.log(props.icon)
    console.log(eval(props.icon))
    return (
        <div>
            <img src={eval(props.icon)}/>
            <img src={js_logo}/>
        </div>
    )   
}

export default Badge;
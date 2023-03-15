import { NavLink } from "react-router-dom";

function Header (){
    const navData = {
        Home: "/",
        "Skills": "/skills",
        "Projects": "/projects",
        "Contact me": "/contact",
        // "CV": "/cv",
    }

    const handleClickScroll = (section) => {
        const element = document.getElementById(section);
        if (element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <header className="header">
            <h1 style={{margin:0}}>SA</h1>
            <nav>
                {Object.keys(navData).map((key) => (
                    // <NavLink to={navData[key]} style={{color: "white"}}>{key}</NavLink>
                    <NavLink onClick={()=> handleClickScroll(navData[key])} style={{color: "white"}}>{key}</NavLink>
                ))}
                {/* <NavLink to="/" style={{color: "white"}}>Home</NavLink>
                <NavLink to="/contact">Contact me</NavLink>
                <NavLink to="/projects">Projects</NavLink> */}
            </nav>
        </header>
    )
}

export default Header;
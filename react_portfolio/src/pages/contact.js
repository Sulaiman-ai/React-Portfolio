import ContactForm from "../components/contact_form"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact(){
    return (
    <div id="/contact" className="contact-page main">
        
        <div className="contact-details">
            <h1>Contact</h1>
            {/* <h4>Email</h4> */}
            <div>
                <FontAwesomeIcon className="inline inline-icon" icon={'fa-solid fa-envelope'} size="1x"/>
                <p className="inline">sulaiman.amjad@gmail.com</p>
            </div>

            {/* <h4>Mobile Number</h4> */}
            <div>
                <FontAwesomeIcon className="inline inline-icon" icon={'fa-solid fa-phone'}/>
                <p className="inline">07835339976</p>
            </div>
            
            {/* <h4> */}
                <a className="link-icon" href="https://www.linkedin.com/in/sulaiman-amjad-1078a221a/">
                    <FontAwesomeIcon icon={'fa-brands fa-linkedin'} size="2x"/>
                </a>
                {/* </h4> */}
            {/* <h4> */}
                <a className="link-icon" href="https://github.com/Sulaiman-ai">
                    <FontAwesomeIcon icon={'fa-brands fa-github'} size="2x"/>
                    </a>
                {/* </h4> */}
            {/* <div>
                <h2>Where to find my work</h2>
                <p>GitHub: <a href="github.com">github.com</a></p>
            </div>

            <div>
                <h2>Contact Me</h2>
                <p>LinkedIn: <a href="linkedin.com">linkedin.com</a></p>
                <p>sulaiman.amjad@gmail.com</p>
                <p>07835339976</p>
            </div> */}
        </div>
        <ContactForm/>
    </div>
    )
}

export default Contact;
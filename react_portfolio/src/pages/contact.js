import ContactForm from "../components/contact_form"

function Contact(){
    return (
    <div id="/contact" className="contact-page main">
        
        <div className="contact-details">
            <h1>Contact</h1>
            <h4>Email</h4>
            <p>sulaiman.amjad@gmail.com</p>

            <h4>Mobile Number</h4>
            <p>07835339976</p>
            
            <h4><a href="https://www.linkedin.com/in/sulaiman-amjad-1078a221a/">LinkedIn</a></h4>
            <h4><a href="https://github.com/Sulaiman-ai">GitHub</a></h4>
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
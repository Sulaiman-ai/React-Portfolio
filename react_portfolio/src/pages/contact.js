import ContactForm from "../components/contact_form"

function Contact(){
    return (
    <div className="contact-page">
        <ContactForm/>
        <div className="contact-details">
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
    </div>
    )
}

export default Contact;
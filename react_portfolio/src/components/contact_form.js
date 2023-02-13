function ContactForm(){
    return (
        <>
        <div className="contact-form-container">
            <h1>Contact me</h1>
            <p>React form module</p>
            <form className="Contact-form">
                <input type="text" name="email" placeholder="Enter your email address"/>
                <textArea placeholder="Message"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
        </>
    )
}

export default ContactForm;
function ContactForm(){
    return (
        <>
        <div className="contact-form-container">
            <h1>Enquiries</h1>
            <p>React form module</p>
            <form className="Contact-form">
                <label>NAME</label>
                <input type="text" name="name" placeholder="Enter your email address"/>
                <label>EMAIL</label>
                <input type="text" name="email" placeholder="Enter your email address"/>
                <label>MESSAGE</label>
                <textArea placeholder="Message"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
        </>
    )
}

export default ContactForm;
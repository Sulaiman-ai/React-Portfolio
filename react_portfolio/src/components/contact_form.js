function ContactForm(){
    return (
        <>
        <div>
            <h1>Contact Form</h1>
            <p>React form module</p>
            <form>
                <label>Email:
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="submit"/>
                <label>
                    Message:
                    <textArea>
                        Hi Sulaiman,
                    </textArea>
                </label>
            </form>
        </div>
        </>
    )
}

export default ContactForm;
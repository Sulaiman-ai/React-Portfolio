import { useState } from 'react';

function ContactForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const access_key = "88a2c01c-f3c9-46c1-98df-bf8ba9248341";
        // const formId = 'my-form-id';
        const formData = {
          name,
          email,
          message,
          access_key
        };
    
        fetch(`https://api.web3forms.com/form/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (response.ok) {
              console.log('Form submission successful!');
            } else {
              console.error('Form submission failed:', response.statusText);
            }
          })
          .catch((error) => {
            console.error('Form submission failed:', error);
          });
      };

    return (
        <>
        <div className="contact-form-container">
            <h1>Enquiries</h1>
            {/* <p>React form module</p> */}
            <form className="Contact-form" onSubmit={handleSubmit}>
                <label>NAME</label>
                <input type="text" name="name" placeholder="Enter your email address"
                onChange={e=> setName(e.target.value)}/>
                <label>EMAIL</label>
                <input type="text" name="email" placeholder="Enter your email address"
                onChange={e=> setEmail(e.target.value)}/>
                <label>MESSAGE</label>
                <textArea placeholder="Message"
                onChange={e=> setMessage(e.target.value)}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
        </>
    )
}

export default ContactForm;
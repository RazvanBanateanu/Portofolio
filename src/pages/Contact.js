import React from "react";
import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [number, setNumber] = useState('');
  
    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
      };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
      };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const mailtoLink = `mailto:banateanu.razvan1@gmail.com?subject=${subject}&body=${encodeURIComponent(message)}%0APhone number: ${number}`;
      window.location.href = mailtoLink;
    };

    return(
        <div className="contact">

            <h2 className="heading">Contact <span>Me</span></h2>
            <form onSubmit={handleFormSubmit}>
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="Full name" required />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type='email' placeholder="Email address" required />
                        <span className="focus"></span>
                    </div>
                </div>

                <div className="input-box">
                    <div className="input-field">
                        <input type="number" placeholder="Mobile number" on onChange={handleNumberChange} required />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type='text' placeholder="Subject" onChange={handleSubjectChange} required />
                        <span className="focus"></span>
                    </div>
                </div>

                <div className="text-field">
                    <textarea name="" id="" cols="30" rosw="10" placeholder="Your message" onChange={handleMessageChange} required /> 
                    <span className="focus"></span>
                </div>

                <div className="btn-box btns">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
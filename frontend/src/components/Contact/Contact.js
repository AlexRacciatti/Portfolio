import React, { useRef } from 'react';
import Header from '../Home/Header/Header';
import './Contact.css'

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ewu43hu', 'template_u9mo2ah', form.current, 'ZFViWuqS2r_ortz1s')
      .then((result) => {
          form.current.reset()
          console.log(result.text);
          Swal.fire(
            'Thank you!',
            'Your message was succesfully sent. You will recieve an answer ASAP',
            'success'
          )
      }, (error) => {
          console.log(error.text);
      });
  };

  return(
    <div>
        <Header/>
        <h1>This is Contact Component</h1>
        <div className='contact-container'>
          <div className='left'>
            <div className='contact-form-background'>
              <h2>Let me know if you want me to reach you!</h2>
              <h4>Complete this form so i can get in touch</h4>
              <form ref={form} onSubmit={sendEmail} className='contact-form'>
                <label>Name</label>
                <input type="text" name="user_name" className='contact-input' required />
                <label>Email</label>
                <input type="email" name="user_email" className='contact-input' required />
                <label>Message</label>
                <textarea name="message" className='contact-input' required />
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
          <div className='right'>
            <h2>If you want to see more about me, here are my social medias</h2>
            <ul>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        
    </div>
  )
};

export default Contact;

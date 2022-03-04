import React, { useRef } from 'react';
import Header from '../Home/Header/Header';
import './Contact.css'

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { GitHub, LinkedIn } from '@mui/icons-material';

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
        <div className='contact-form-content'>
          <h1 className='contact-heading'>Contact me!</h1>
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <label>Name</label>
            <input type="text" name="user_name" className='contact-input' required />
            
            <label>Email</label>
            <input type="email" name="user_email" className='contact-input' required />
            
            <label>Message</label>
            <textarea name="message" className='contact-input' required />
            
            <button className='contact-submit-btn' type='submit'>Submit</button>
          </form>
          <ul className='contact-socials-list'>
            <li ><a className='contact-social-item' href='https://www.linkedin.com/in/alexracciatti/' target={'_blank'} rel='noreferrer'><LinkedIn  style={{ fontSize: '70px' }}/></a></li>
            <li ><a className='contact-social-item' href='https://github.com/AlexRacciatti' target={'_blank'} rel='noreferrer'><GitHub  style={{ fontSize: '70px' }}/></a></li>
          </ul>
        </div>
      
      </div>
      )
    };
    
    export default Contact;
    
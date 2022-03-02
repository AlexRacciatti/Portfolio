import React, { useRef } from 'react';
import Header from '../Home/Header/Header';

import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ewu43hu', 'template_u9mo2ah', form.current, 'ZFViWuqS2r_ortz1s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return(
    <div>
        <Header/>
        <h1>This is Contact Component</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
    </div>
  )
};

export default Contact;

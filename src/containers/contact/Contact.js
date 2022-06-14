import React from 'react'
import './Contact.css'
import { Heading,ContactForm } from '../../components'
import ContactImage from './contact_image.svg'

function Contact() {
  return (
    <div className='contact-wrapper' id='contact'>
      <div className='contact-heading-container'>
        <Heading title='Contact' subtitle='Get in touch' />
      </div>
      <div className='contact-form-container section-margin'>
        <div className='contact-form-image'>
          <img src={ContactImage} alt="contact" />
        </div>
        <div className='contact-form-wrapper'>
          <h4>Leave us a message !</h4>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
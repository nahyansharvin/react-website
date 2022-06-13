import React from 'react'
import './Contact.css'
import { Heading,ContactForm } from '../../components'

function Contact() {
  return (
    <div className='contact-wrapper' id='contact'>
      <div className='contact-heading-container'>
        <Heading title='Contact' subtitle='Get in touch' />
      </div>
      <div className='contact-form-container'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
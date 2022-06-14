import React from 'react';
import './ContactForm.css';

//Material UI
import TextField from '@mui/material/TextField';

import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mdobjyon");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form className='contact-form' onSubmit={handleSubmit}>
    <TextField className='contact-form-field' name='name' id='name' type='text'  label="Name" />
    <TextField className='contact-form-field' name='email' id='email' type='email' label="Email" />
    <TextField className='contact-form-field' name='message' id='message' type='text' label="Message" multiline rows={5} />


    <button type="submit" disabled={state.submitting}>
      Submit
    </button>
  </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;

import React, { useState } from 'react'
import headingImage from '../assets/images/Contact.png';
import StyledHeading from '../ui/StyledHeading';
import ContactForm from '../components/Contact/ContactForm';

export default function Contact() {

 return (
    <main className='portfolio_Page'>
     <StyledHeading image={headingImage} heading="US" isContactpage={true} />
     <ContactForm />
    </main>
  )
}


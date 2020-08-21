import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/form.css'

const ContactMePage = () => (
    <Layout>
        <SEO title="Contact Me" />
        <div className="contact-section">
            <h1>Contact Me</h1>
            <form className="contact-me-form" method="post" action="#">
                <label>
                    Name
                    <input type="text" name="name" id="name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" id="email" />
                </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="6" />
                </label>
                <button type="submit">Send</button>
            </form>    
        </div>
    </Layout>
)   

export default ContactMePage
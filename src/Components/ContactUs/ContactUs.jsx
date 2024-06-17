import React, { useState } from 'react';
import './ContactUs.css';
import axios from 'axios';

export default function ContactUs() {
    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientMessage, setClientMessage] = useState('');

    const sendFeedback = (e) => {
        e.preventDefault();
        const newFeedback = { clientName, clientEmail, clientMessage };
        axios.post('https://foodblog-backend.onrender.com/add-feedback', newFeedback, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                window.alert('Feedback added successfully...!');
            })
            .catch(err => {
                window.alert('Fail to send feedback...!');
                console.log(err);
            });
    }

    return (
        <>
            <section className="contact-us-container">
                <h2 id="contact-us-heading">Contact with us</h2>
                <form className="contact-us-form" onSubmit={sendFeedback}>
                    <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        id='client-name'
                        className='contact-us-form-input'
                        placeholder='Enter your name'
                        required />
                    <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        id='client-email'
                        className='contact-us-form-input'
                        placeholder='Enter your email address'
                        required />
                    <textarea
                        name="client-message"
                        cols="50" rows="10"
                        value={clientMessage}
                        onChange={(e) => setClientMessage(e.target.value)}
                        id='client-message'
                        className='contact-us-form-input'
                        placeholder='Enter your message...'
                        required />
                    <button
                        type='submit'
                        id='send-feedback'>
                        Send
                    </button>
                </form>
            </section>
        </>
    );
}

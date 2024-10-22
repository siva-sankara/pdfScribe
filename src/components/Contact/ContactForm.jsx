import React, { useState } from 'react';
import './ContactForm.css'
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        referral: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        // You can add form submission logic here
    };

    return (
        <div className="contact-form">
           <div style={{display:"flex", flexDirection:"column", marginBottom:"10px", alignItems:"center"}}>
        <h4
          style={{ margin: "10px 0", color: "#008080", marginTop: "" }}
          className="hash-text"
        >
          #CONTACT US
        </h4>
        <h3 className="testimonial-heading">Get in Touch</h3>
        <p className='desc'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
      </div>
            <form onSubmit={handleSubmit}>
                <div>
                  
                    <input
                    placeholder='Name *'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                   
                    <input
                    placeholder='Email'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder='Phone number *'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                   
                    <select
                        name="referral"
                        value={formData.referral}
                        onChange={handleChange}
                    >
                        <option value="">How did you find us?</option>
                        <option value="search">Search Engine</option>
                        <option value="social">Social Media</option>
                        <option value="friend">Friend</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" style={{width:"100%" ,backgroundColor:" #008080", padding:"15px"}}>SEND</button>
            </form>
        </div>
    );
};

export default ContactForm;
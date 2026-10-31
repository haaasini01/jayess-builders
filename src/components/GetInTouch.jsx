import telanganaImg from '../images/earth0.png';
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  district: z.string().min(1, 'Interested area is required'),
  phone: z.string().regex(/^[+\d\s().-]{7,30}$/, 'Phone number must be 6-30 characters (country codes, spaces, dashes, parentheses, and dots allowed)'),
  email: z.string().email('Invalid email address'),
  propertyType: z.string().optional(),
});

function GetInTouch() {
  const [form, setForm] = useState({
    name: '',
    district: '',
    phone: '',
    email: '',
    propertyType: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isLoading) return;
    
    const phoneToValidate = form.phone.trim();
    console.log("Phone number to validate:", `"${phoneToValidate}"`);
    console.log("Phone number length:", phoneToValidate.length);
    
    const result = schema.safeParse({
      name: form.name,
      district: form.district,
      phone: phoneToValidate,
      email: form.email,
      propertyType: form.propertyType,
    });
    if (!result.success) {
      console.log("Validation errors:", result.error.errors);
      const errorMessages = result.error.errors 
        ? result.error.errors.map(err => {
            // Map field names to user-friendly names
            const fieldMap = {
              name: 'Full Name',
              district: 'Interested Area', 
              phone: 'Phone Number',
              email: 'Email Address',
              propertyType: 'Message'
            };
            const fieldName = fieldMap[err.path[0]] || err.path[0];
            return `• ${fieldName}: ${err.message}`;
          }).join('\n')
        : 'Please check your input and try again.';
      
      alert(`Please fix the following errors:\n\n${errorMessages}`);
      return;
    }
    
    setIsLoading(true);
    try {
      console.log("Submitting form data:", {
        name: form.name,
        interestedArea: form.district,
        phoneNo: form.phone,
        email: form.email,
        message: form.propertyType
      });
      
      const response = await fetch("https://api.jayessbuilders.co/user/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          interestedArea: form.district,
          phoneNo: form.phone,
          email: form.email,
          message: form.propertyType
        })
      });
      
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      
      const data = await response.json();
      console.log("Response data:", data);
      
      if (response.ok) {
        alert("Message sent successfully!");
        setForm({
          name: '',
          district: '',
          phone: '',
          email: '',
          propertyType: ''
        });
      } else {
        alert(`Failed to send message: ${data.message || response.statusText}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Network error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-heading" data-reveal>
        <p className="eyebrow">We’re here to help</p>
        <h1>Tell us what<br /><span>you’re dreaming of.</span></h1>
        <p>Share a little about what you’re looking for. Our team will be in touch to help you take the next step.</p>
      </div>
      <div className="contact-layout" data-reveal>
        <aside className="contact-location">
          <img src={telanganaImg} alt="Map of Telangana" />
          <div className="location-overlay">
            <span className="location-pin" aria-hidden="true">●</span>
            <div><span>PROUDLY ROOTED IN</span><strong>Hyderabad, Telangana</strong></div>
          </div>
          <div className="contact-direct">
            <span>Prefer a direct conversation?</span>
            <a href="tel:+919515496226">+91 95154 96226 <span aria-hidden="true">↗</span></a>
          </div>
        </aside>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-heading"><span>01 — YOUR DETAILS</span><h2>Let’s get to know you.</h2></div>
          <div className="form-grid">
            <label>Full name
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" autoComplete="name" required />
            </label>
            <label>Interested area
              <input type="text" name="district" value={form.district} onChange={handleChange} placeholder="e.g. Manikonda" required />
            </label>
            <label>Phone number
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91" autoComplete="tel" required />
            </label>
            <label>Email address
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" required />
            </label>
            <label className="form-message">What would you like to discuss?
              <textarea name="propertyType" value={form.propertyType} onChange={handleChange} placeholder="Tell us a little about what you have in mind..." rows={4} />
            </label>
          </div>
          <button type="submit" disabled={isLoading} className="button button-dark form-submit">
            {isLoading ? 'Sending your message...' : 'Send an enquiry'} <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note">Your details are only used to respond to your enquiry.</p>
        </form>
      </div>
    </section>
  );
}

export default GetInTouch; 
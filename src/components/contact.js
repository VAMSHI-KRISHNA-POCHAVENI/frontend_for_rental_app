import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button className="btn" type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

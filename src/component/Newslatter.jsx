import React, { useState } from "react";
import "./newslatter.css";

const Newslatter = () => {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to a server
    console.log("Name:", name);
    console.log("Email:", email);
    // Reset the form after submission
    setName("");
    setEmail("");
  };
  return (
    <div className="newsletter-parent-container">
        <div className="sub-newsletter-container">
          <h2>Subscribe our Newsletters</h2>
          <p>
            Fill below details to stay updated with our startup community and
            get the latest news in the ecosystem.
          </p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="form-group">
              {/* <label htmlFor="name">Name:</label> */}
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="name-field pl-5 rounded-md"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-field pl-10 rounded-md"
              />
            </div>
            <button type="submit" className="submit-btn w-[160px]">Sign Up</button>
          </form>
          <h6>By subscribing, you agree to the Terms of Service</h6>
        </div>
      </div>
  )
}

export default Newslatter;

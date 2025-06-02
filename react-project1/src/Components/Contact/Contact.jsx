import React from "react";
import "./Contact.css";

import message from "../../assets/msg-icon.png";

import phoneicon from "../../assets/phone-icon.png";
import mailicon from "../../assets/mail-icon.png";
import locationicon from "../../assets/location-icon.png";

import whitearrow from "../../assets//white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "Api-key");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us A Message <img src={message} alt="mess-icon" />
        </h3>
        <p>
          Feel Free to reach us out through contact form or find our contact
          information below. Your feedback, Questions, and suggestion are
          important to us as we stive to provide our service;
        </p>
        <ul>
          <li>
            <img src={mailicon} alt="mail"/>
            contactus@gmail.com
          </li>
          <li>
            <img src={phoneicon} alt="phone" />
            XXXXXXXXXX
          </li>
          <li>
            <img src={locationicon} alt="locationicon" />
            Dubai main road , dubai
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="number"
            placeholder="Enter Your Phone Number"
            required
          />
          <label>Send Us your Message</label>
          <textarea
            name="message"
            placeholder="Enter the message"
            rows="6"
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={whitearrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;

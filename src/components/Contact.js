import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { validateEmail } from "../utils/helpers";

require("dotenv").config();

function Contact() {
  const [state, handleSubmit] = useForm("xkgfnybyydk");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  if (state.succeeded) {
    return (
      <div>
        <p>Thanks for reaching out!</p>
        <button
          className="button is-medium is-primary is-half m-6"
          onClick={() => window.open("/#contact")}
        >
          Back to About
        </button>
      </div>
    );
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      alert(`Form Sumbitted: ${name} ${email} ${message}`);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("error accord");
    }
  };

  return (
    <div>
      <p className="content is-medium">Contact Me</p>
      <hr />
      <form
        id="contact-form"
        action="/action_page.php"
        onSubmit={handleFormSubmit}
      >
        <div className="field">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Enter Name Here"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
            Email Address
          </label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Enter Email Here"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea
            className="textarea"
            name="message"
            placeholder="Type Message Here"
            rows="5"
            defaultValue={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="is-danger">{errorMessage}</p>
          </div>
        )}
        <button
          className="button is-medium is-primary is-fullwidth"
          data-testid="button"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;

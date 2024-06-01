import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const successMessage = (
  <h1>
    Thanks for getting in touch!
    <br />
    We will contact you shortly!
  </h1>
);

const errorMessage = (
  <h1>
    Something went wrong!
    <br />
    Please try again!
  </h1>
);

export default function SubmitForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const searchParams = new URLSearchParams(useLocation().search);
  const success = searchParams.get("success");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setIsSubmitting(true);
  };

  return (
    <>
      {success === "true" ? successMessage : success === null ? "" : errorMessage}
      <iframe
        name="hiddenConfirm"
        id="hiddenConfirm"
        style={{ display: "none" }}
        onLoad={() => {
          if (submitted === true) window.location.href = "/contact?success=true";
        }}
      />

      <motion.div whileInView={{ y: 0, opacity: 100, transition: { duration: 0.6 } }} initial={{ y: -25, opacity: 0 }}>
        <form className="message-form" action={process.env.REACT_APP_FORM_URL} method="post" target="hiddenConfirm" onSubmit={handleSubmit}>
          <div className="display-flex">
            <div>
              <label htmlFor="name_field">Name:</label>
              <br />
              <input type="text" name="name_field" id="name" placeholder="Your neme" required />
            </div>
            <div>
              <label htmlFor="email_field">Email:</label>
              <br />
              <input type="email" name="email_field" id="email" placeholder="Your email address" required />
            </div>
          </div>
          <div>
            <label htmlFor="subject_field">Subject:</label>
            <br />
            <select name="subject_field" id="subject" defaultValue="" required>
              <option value="" disabled>
                Select a subject
              </option>
              <option value="game-development">Game Development</option>
              <option value="collaboration">Collaboration</option>
              <option value="help">Help</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <div>
            <label htmlFor="message_field">Message:</label>
            <br />
            <textarea name="message_field" id="message" placeholder="Message" required></textarea>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit Form
          </button>
        </form>
      </motion.div>
    </>
  );
}

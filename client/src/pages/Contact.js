import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [hiddenState, setHiddenState] = useState(true);

  const { user_name, user_email, subject, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pp4vr3k",
        "template_ynds1gn",
        form.current,
        "V3zJe7NG41_vZdTzG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormState({ user_name: "", user_email: "", subject: "", message: "" });
    setHiddenState(false);
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h1>Contact Us</h1>
      <div className="user-inf">
        <input
          type="text"
          value={user_name}
          name="user_name"
          className="name-input"
          id="contact-name"
          placeholder="name"
          onChange={handleChange}
        ></input>

        <input
          type="email"
          value={user_email}
          name="user_email"
          className="email-input"
          id="contact-email"
          placeholder="email"
          onChange={handleChange}
        ></input>
      </div>
      <div className="message-content">
        {/* <input
          name="subject"
          value={subject}
          className="subject-input"
          id="contact-subject"
          placeholder="subject"
          onChange={handleChange}
        ></input> */}
        <textarea
          name="message"
          value={message}
          className="message-input"
          id="contact-message"
          placeholder="message"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="send-button">
        <input type="submit" value="send" id="send-email" />
      </div>
      <div className={hiddenState ? "hidden-toast" : ""}>Sent</div>
    </form>
  );
}

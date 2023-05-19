import React, { useState } from "react";
const styles = {
  h2: {
    textAlign: "center",
  },
  email: {
    textAlign: "center",
    paddingBottom: "1.0rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "0 auto",
  },
  input: {
    marginBottom: "1.0rem",
  },
  inputa: {
    height: "100px",
  },
};
function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "name") {
      setName(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Email is invalid");
      return;
    }

    if (!name || !message) {
      alert("All fields are required");
      return;
    }

    setSuccessMessage("Form submitted successfully");
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <h2 style={styles.h2}>Contact</h2>
      <div style={styles.email}>
        <a href="mailto:athenawilbon1994@gmail.com">athenawilbon1994@gmail.com</a>
      </div>
      <form style={styles.form} onSubmit={handleFormSubmit} className="form">
        <div style={styles.input}>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div style={styles.input}>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div style={styles.input}>
          <input
            style={styles.inputa}
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {successMessage && (
        <div style={styles.form}>
          <p className="success-text">{successMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

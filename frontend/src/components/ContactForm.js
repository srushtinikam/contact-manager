import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://contact-manager-flvr.onrender.com/api/contacts";

function ContactForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      setError("Name, Email and Phone are required");
      return;
    }

    try {
      await axios.post(API_URL, form);
      setForm({ name: "", email: "", phone: "", message: "" });
      setError("");
      onAdd();
    } catch (err) {
      setError("Failed to save contact");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Contact</h3>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">Save</button>
    </form>
  );
}

export default ContactForm;

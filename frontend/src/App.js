import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const API_URL = "https://contact-manager-flvr.onrender.com/api/contacts";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API_URL);
      setContacts(res.data);
    } catch (err) {
      console.error("Error fetching contacts");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h2>Contact Manager</h2>
      <ContactForm onAdd={fetchContacts} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

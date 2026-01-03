import React from "react";

function ContactList({ contacts }) {
  return (
    <div>
      <h3>Contact List</h3>

      {contacts.length === 0 && <p>No contacts found</p>}

      {contacts.map((c) => (
        <div key={c._id} className="card">
          <p><b>{c.name}</b></p>
          <p>{c.email}</p>
          <p>{c.phone}</p>
          <p>{c.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactList;

const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// GET all contacts
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// ADD new contact
router.post("/", async (req, res) => {
  const { name, email, phone } = req.body;

  const newContact = new Contact({
    name,
    email,
    phone
  });

  await newContact.save();
  res.json(newContact);
});

// DELETE contact
router.delete("/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Contact deleted" });
});

// UPDATE contact
router.put("/:id", async (req, res) => {
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedContact);
});

module.exports = router;

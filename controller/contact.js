//@IMPORTS
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc get all contact
//@route get /api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc add contact
//@route post /api/contacts
//@access public
const pushContact = asyncHandler(async (req, res) => {
  console.log(`the request body is : `, req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandotary !");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//@desc get a contact
//@route get /api/contacts/:id
//@access public
const getAContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});

//@desc delete a contact
//@route delete /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  res.status(200).json(contact);
});

//@desc upadate a contact
//@route put /api/contacts/:id
//@access public
const upadateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});

module.exports = {
  getContact,
  upadateContact,
  deleteContact,
  pushContact,
  getAContact,
};

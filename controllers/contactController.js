const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET/api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
  
  // res.status(200).json({ message: "Get all contacts" });
});
//@desc Create new contacts
//@route POST/api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log("The req body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });

  res.status(201).json(contact);
  // res.status(201).json({ message: "Create contacts" });
});

//@desc Get contact by  ID
//@route GET/api/contacts
//@access public
const getContactId = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});
// const getContactId = asyncHandler(async (req, res) => {
//   res.status(201).json({ message: `Get contacts for ${req.params.id}` });
// });
//@desc put contacts by ID
//@route update/api/contacts
//@access 
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});
// const updateContact = asyncHandler(async (req, res) => {
//   res.status(201).json({ message: `Update contacts for ${req.params.id}` });
// });
//@desc Delete contacts By ID
//@route delete/api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {const asyncHandler = require("express-async-handler");
  const Contact = require("../models/contactModel");
  //@desc Get all contacts
  //@route GET /api/contacts
  //@access private
  const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
  });

  //@desc Create New contact
  //@route POST /api/contacts
  //@access private
  const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
      name,
      email,
      phone,
      user_id: req.user.id,
    });

    res.status(201).json(contact);
  });

  //@desc Get contact
  //@route GET /api/contacts/:id
  //@access private
  const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);
  });

  //@desc Update contact
  //@route PUT /api/contacts/:id
  //@access private
  const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }

    if (contact.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error(
        "User don't have permission to update other user contacts"
      );
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedContact);
  });

  //@desc Delete contact
  //@route DELETE /api/contacts/:id
  //@access private
  const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    if (contact.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error(
        "User don't have permission to update other user contacts"
      );
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
  });

  module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
  };
    res.status(404);
    throw new Error("Contact not found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});
// const deleteContact = asyncHandler(async (req, res) => {
//   res.status(201).json({ message: `Delete contacts ${req.params.id}` });
// });
module.exports = { getContact , createContact,getContactId,updateContact,deleteContact};

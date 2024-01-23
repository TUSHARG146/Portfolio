// server.js
const path = require("path");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Fix: use extended instead of extend

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" })
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/api/contact", (req, res) => { // Fix: Use bodyParser.urlencoded({ extended: true })
  const { firstName, lastName, email, message, phone } = req.body;

  if (!firstName || !email || !message) {
    res.status(400).json({ code: 400, status: "Bad Request", message: "Please fill out all required fields." });
    return;
  }

  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is online on port: ${PORT}`);
});

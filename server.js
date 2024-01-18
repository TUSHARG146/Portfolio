// server.js
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "tushar146gpt@gmail.com",
    pass: "janm eyol wxbm bhbv"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  // Check for required fields
  if (!firstName || !email || !message) {
    res.status(400).json({ code: 400, status: "Bad Request", message: "Please fill out all required fields." });
    return;
  }

  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: "tushar146gpt@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ code: 500, status: "Internal Server Error", error });
    } else {
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

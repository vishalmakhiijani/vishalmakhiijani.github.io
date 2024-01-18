// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require('dotenv').config();

// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(3000, () => console.log("Server Running"));
// console.log(process.env.EMAIL_ADDRESS);
// console.log(process.env.EMAIL_PASS);


// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_ADDRESS,
//     pass: process.env.EMAIL_PASS
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });



// router.post("/contact", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: "vk4562000@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone Number: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       // Send thank you email to the user
//       sendThankYouEmail(email);
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });

// function sendThankYouEmail(userEmail) {
//   const thankYouMail = {
//     from: 'vk4562000@gmail.com',
//     to: userEmail,
//     subject: 'Thank You for Contacting Us',
//     html: '<p>Thank you for reaching out. We appreciate your inquiry!</p>',
//   };

//   contactEmail.sendMail(thankYouMail, (thankYouError) => {
//     if (thankYouError) {
//       console.error('Error sending thank you email:', thankYouError);
//     } else {
//       console.log('Thank you email sent successfully');
//     }
//   });
// }


const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

console.log(process.env.EMAIL_ADDRESS);
console.log(process.env.EMAIL_PASS);

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

router.post("/contact", (req, res) => {
  const name = req.body.firstName +" "+ req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  // Send inquiry email
  const inquiryMail = {
    from: name,
    to: "vk4562000@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone Number: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(inquiryMail, (inquiryError) => {
    if (inquiryError) {
      res.json(inquiryError);
    } else {
      // Send thank you email to the user
      sendThankYouEmail(email,name);

      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

function sendThankYouEmail(email,name) {
  const thankYouMail = {
    from: 'vk4562000@gmail.com',
    to: email,
    subject: 'Thank You for Contacting Me',
    html: `
    <p>Hello ${name}</p> <br>
     <p>I've received your inquiry, and I'm eager to learn more about your thoughts and requirements. Rest assured, 
     I will do my best to respond promptly and provide the information or assistance you're looking for.</p><br>
     <p>Thank you once again for considering my portfolio. I'm looking forward
      to the opportunity to connect further and discuss how I can contribute to your goals.</p><br>
      <p>Best regards,</p>
      <p> <a href='https://vishalmakhiijani.github.io/' target='_blank'>Vishal Makhijani</a></p><br>
      
    `,
  };

  contactEmail.sendMail(thankYouMail, (thankYouError) => {
    if (thankYouError) {
      console.error('Error sending thank you email:', thankYouError);
    } else {
      console.log('Thank you email sent successfully');
    }
  });
}


// import express from 'express'

const nodemailer = require('nodemailer')
const express = require('express');
// import bodyParser from 'body-parser'
const bodyParser = require('body-parser');

// import mailer from './mailer'

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
})
const transporter = nodemailer.createTransport({
  host: "gnld1002.siteground.eu",
port: 465,
secure: true, // true for 465, false for other ports
auth: {
user: 'contact@adhamabohasson.com', // generated ethereal user
pass: 'OSXEP544QOyn' // generated ethereal password
}
});

const send = ({message, email, company, firstName, lastName}) => {
    const from = `contact@adhamabohasson.com`
  const toSend = {
    from,
    to: "adham.ahasson@gmail.com",
    subject: `New contact Message ${`From ${firstName} ${lastName} in ${company}`}`,
    html:`
    <div>
    <h3 style="color:red; font-size:1.3rem;">You have a new contact</h3>
    <p style="color:black; font-size:1rem;">Message: <br/>"${message}"</p>
    <p>Reply to ${firstName} ${lastName} via ${email}</p>

    </div>
    
    `,
    
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(toSend, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}
app.post('/contact', (req, res) => {
  const { email = '', firstName = '', lastName='', message = '' , company=''} = req.body

  send({ email, firstName,lastName, message: message, company:company }).then(() => {
    console.log(`Sent the message "${message}" from <${firstName} ${lastName}> <${company}> ${email}.`);
    res.redirect('/');
  }).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${firstName}> ${email} with the error ${error && error.message}`);
    res.redirect('/#error');
  })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})

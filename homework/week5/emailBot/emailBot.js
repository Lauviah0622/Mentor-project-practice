const mailgun = require("mailgun-js");
const request = require("request");
const fs = require('fs');

const DOMAIN = "sandbox1cdeb2bfbc1e4b5aa23429926fc8f322.mailgun.org";
const mg = mailgun({
  apiKey: "615671ec434a6ad1ac9105510555b605-a83a87a9-d7b5117a",
  domain: DOMAIN
});

let text, subject, targets
fs.readFile('./mailTemplate.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log(err)
  }

  subject = data.split('\n')[0];
  text = data.split('\n').slice(1).join('\n');
  // console.log(text)
  // console.log(subject)
  fs.readFile('./messengerList.txt', 'utf8', (err, data) => {
    if (err) {
      return console.log(err)
    }
    console.log(typeof data)
    targets = data.split('\n').map(e => e.split(' '));

    (function sendEmailByIndex(i) {
      if (i >= targets.length) return
      let transText = text.replace(/\{\{\w+\}\}/g, targets[i][1]);
      console.log(transText);
      request('https://api.pics.ee/v1/links/?access_token=20f07f91f3303b2f66ab6f61698d977d69b83d64', (err, res, body) => {
        // sendEmail(targets[i], subject, transText)
      })

    sendEmailByIndex(i + 1)

  }(0))

})
  
})

function sendEmail(to, subject, text) {
  const data = {
    from: "Mailgun Sandbox <postmaster@sandbox1cdeb2bfbc1e4b5aa23429926fc8f322.mailgun.org>",
    to,
    subject,
    text
  };

  mg.messages().send(data, function (err, body) {
    if (err) {
      return console.log(err);
    }
    console.log(body);
  });
}

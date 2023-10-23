const nodemailer = require("nodemailer");
module.exports.sendMail = () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "han20031605@gmail.com",
      pass: "wdec fwhj nutz mvte",
    },
  });

  const mailOptions = {
    from: "hello@example.com",
    to: "reciever@gmail.com",
    subject: "Subject",
    text: "Email content",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      // do something useful
    }
  });
};

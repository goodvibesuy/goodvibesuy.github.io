var nodemailer = require('nodemailer');
var motionMail = function () {

};

motionMail.setMailTo = function(mailTo) {
    this.mailTo = mailTo;
}

motionMail.sendMail = function (subject,text,mailTo, callBack,callBackError) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'stmotion2016@gmail.com',
            pass: 'st2016motion'
        }
    });    
    var mailOptions = {
        from: 'stmotion2016@gmail.com', // sender address
        to: motionMail.mailTo, // list of receivers
        subject: subject, // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };
    transporter.sendMail(mailOptions, function (errorMail, info) {
        if (errorMail) {
            callBackError(errorMail);
        } else {
            callBack('Message sent: ' + info.response);
        };
    });
}

module.exports = motionMail;
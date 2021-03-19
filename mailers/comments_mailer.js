const nodeMailer = require('../config/nodemailer');

//this is another way of exporting a method
exports.newComment = (comment) => {
    console.log('inside new comment mailer',comment);

    nodeMailer.transporter.sendMail({
        from: 'example@gmail.com',
        to: comment.user.email,
        subject: "New comment published!",
        html: '<h1> Yup, Your comment is now published! </h1>'
    },(err,info) => {
        if(err){console.log('Error in sending mail',err);return;}

        console.log('Message sent',info);
        return;
    });
}
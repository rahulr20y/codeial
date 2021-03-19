const nodeMailer = require('../config/nodemailer');

//this is another way of exporting a method
exports.newComment = (comment) => {
    //console.log('inside new comment mailer',comment);

    let htmlString = nodeMailer.renderTemplate({comment:comment},'/comments/new_comment.ejs');

    nodeMailer.transporter.sendMail({
        from: 'example@gmail.com',
        to: comment.user.email,
        subject: "New comment published!",
        html: htmlString
    },(err,info) => {
        if(err){console.log('Error in sending mail',err);return;}

        console.log('Message sent',info);
        return;
    });
}
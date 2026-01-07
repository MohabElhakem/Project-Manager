const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Gemail stmp is the host
    port: 587, //TLS Port
    secure: false,
    auth:{
        user: process.env.MAILER, // the company Email
        pass: process.env.MAILER_PASS // the company emailing password
    }
});


// sending function

async function sendInviteEmail (from = 'team manger', ToEmail ,token, projectId,invitationId) {
    const acceptLink = `http://localhost:3000/invitation/accept?token=${token}&projectId=${projectId}&invitationId=${invitationId}`;
    const rejectLink = `http://localhost:3000/invitation/reject?token=${token}&projectId=${projectId}&invitationId=${invitationId}`;

    const info = await transporter.sendMail({
        from: from, // the sender is
        to: ToEmail, // the recipient
        subject: "You are invited to join a team!", // subject
        text: ` HELLO!\n
                You have been invited to join a team\n\n
                \t accept : ${acceptLink}\n
                \t reject : ${rejectLink}\n
        `,
        html: `
        <p>HELLO!</p>
        <p>You have been invited to join a team</p>
        <p> 
            <a href="${acceptLink}"> Accept </a>
            <a href="${rejectLink}"> Reject </a> 
        </p>
        <p> This link expires in 24 hours </p>`
    });

    console.log('email Have been sent\n\n',info.messageId);
}

module.exports = {
    sendInviteEmail
}
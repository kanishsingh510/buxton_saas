const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Define email options
        const mailOptions = {
            from: 'Buxton SaaS <noreply@buxtonsaas.com>',
            to: options.email,
            subject: options.subject,
            text: options.message,
            html: options.html, // Optional HTML version
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        
        // Ethereal provides a preview URL
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;

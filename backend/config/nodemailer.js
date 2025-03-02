import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); 

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 587, 
    secure: false, 
    auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
    }
});

// Correct logging
// console.log('✅ SMTP User:', transporter.options.auth.user);
// console.log('✅ SMTP Pass:', process.env.SMTP_PASS ? 'Loaded' : 'Missing');

export default transporter;

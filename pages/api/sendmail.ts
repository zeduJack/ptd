// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';
import Axios from "axios";

const mailAdress = 'padthaidietikon@gmail.com';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method.toUpperCase() !== 'POST') {
            return;
        }

        const captcha = req.body.captcha;
        let googleUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=6Ldrn3QbAAAAAMfnUjvXtLMdklnAYmJyCog8ogzG&response=' + captcha;

        let captchaResponse = await Axios({
            url: googleUrl
        });

        if (captchaResponse.data.success === false) {
            res.status(200).json({status: 'RECAPTCHAVALIDATIONERROR', error: 'reCAPTCHA validation failed'})
        } else {
            const name = req.body.name;
            const email = req.body.email;
            const message = req.body.message;
            await sendMail(name, email, message);
        }

    } catch (error) {
        showError(res);
    }
}

const sendMail = async (name: string, email: string, message: string) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'zeljko.dujmovic83@gmail.com',
            pass: process.env.GMAIL_APP_PASSWORD
        }
    });

    // send mail with defined transport object
    transporter.sendMail({
        from: mailAdress,
        replyTo: mailAdress,
        to: "zeljko.dujmovic83@gmail.com, zeljko.dujmovic83@gmail.com",
        //to: email,
        subject: "Kundemnimmteilung von " + name,
        text: message
    });
}


const showError = (res: NextApiResponse) => {
    res.status(200).json({status: 'ERROR', error: "unexpected errror"});
}



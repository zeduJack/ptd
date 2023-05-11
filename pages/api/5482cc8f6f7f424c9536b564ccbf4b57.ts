// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';
import Axios from "axios";

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
            res.status(200).json({ status: 'SENT' });
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
            user: process.env.GMAIL_ADDRESS,
            pass: process.env.GMAIL_APP_PASSWORD
        }
    });

    const sender = {
        name: name,
        address: email
    };

    // send mail with defined transport object
    await transporter.sendMail({
        from: sender,
        replyTo: sender,
        to: process.env.GMAIL_ADDRESS,
        subject: "Kontaktanfrage via padthai-dietikon.ch",
        text: message
    });
}


const showError = (res: NextApiResponse) => {
    res.status(200).json({status: 'ERROR', error: "unexpected errror"});
}

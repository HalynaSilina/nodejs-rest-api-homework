import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const {EMAIL, PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 465,
    secure: true,
    auth: {
        user: EMAIL,
        pass: PASSWORD,
    }
}

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async(data) => {
    const email = {...data, from: EMAIL};
    const res = await transport.sendMail(email);
    return res;
}

export default sendEmail;
// pages/api/sendEmail.ts

import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, company, employees } = req.body;

    // Create a transporter with your SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.example.com",
      port: 587,
      secure: false,
      auth: {
        user: "your-email@example.com",
        pass: "your-password",
      },
    });

    // Define email content
    const mailOptions = {
      from: "your-email@example.com",
      to: "olserra@gmail.com",
      subject: "New Lead Submitted",
      text: `A new lead has been submitted:\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nEmployees: ${employees}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      res.status(200).end();
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

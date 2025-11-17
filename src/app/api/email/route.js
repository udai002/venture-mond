"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, 
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(request) {
    const body = await request.json();
    console.log("Received:", body);

    const userMail = {
        from: `Venturemond <${process.env.SMTP_USER}>`,
        to: body.email,
        subject: "Thanks for Reaching Out to Venturemond",
        text: `Hi ${body.name},

Thanks for getting in touch — we’ve received your message.
Someone from our team will get back to you within the next 24 hours.

If your request is urgent, feel free to reply to this email.

— Team Venturemond
Next-Gen Venture Studio & SaaS Company
www.venturemond.com`,
    };

    const teamMail = {
        from: `Venturemond Website <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,  
        subject: `New Inquiry from ${body.name}`,
        text: `
A new inquiry was submitted from the website:

Name: ${body.name}
Email: ${body.email}
Company: ${body.company}
Division: ${body.division}
Service: ${body.service}
Budget: ${body.budget}
Timeline: ${body.timeline}

Message:
${body.description}

Submitted at: ${new Date().toLocaleString()}
        `,
    };

    try {
        await Promise.all([
            transporter.sendMail(userMail),
            transporter.sendMail(teamMail)
        ]);

        return Response.json({ message: "Emails sent successfully!" });
    } catch (error) {
        console.error("MAIL ERROR:", error);
        return Response.json(
            { message: "Email failed", error: error.message },
            { status: 500 }
        );
    }
}

import { Router } from "express";
import nodemailer from "nodemailer";

const contactRouter = Router();

contactRouter.post("/contact", async (req, res) => {
  const { name, email, company, message } = req.body as {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }

  const smtpUser = process.env["SMTP_USER"];
  const smtpPass = process.env["SMTP_PASS"];
  const contactEmail = "saphr.abdul@gmail.com";

  if (!smtpUser || !smtpPass) {
    req.log.warn("Email env vars not configured — logging submission instead");
    req.log.info(
      { name, email, company, message },
      "Contact form submission (email not configured)",
    );
    res.status(200).json({ ok: true });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: smtpUser, pass: smtpPass },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;color:#1a1a2e">
      <h2 style="border-bottom:3px solid #f59e0b;padding-bottom:8px">
        New Enquiry — abdulhaseebshaik.com
      </h2>
      <table style="width:100%;border-collapse:collapse;margin-top:16px">
        <tr><td style="padding:8px 0;font-weight:bold;width:120px">Name</td><td>${name}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        ${company ? `<tr><td style="padding:8px 0;font-weight:bold">Company</td><td>${company}</td></tr>` : ""}
      </table>
      <h3 style="margin-top:24px;margin-bottom:8px">Message</h3>
      <p style="background:#f8f8f8;padding:16px;border-left:4px solid #f59e0b;white-space:pre-line">${message}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Website Enquiry" <${smtpUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      html,
    });
    req.log.info({ name, email }, "Contact email sent successfully");
    res.status(200).json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default contactRouter;

import { Router } from "express";
import { transporter } from "../services/mail-service.js";
import env from "../config/env.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await transporter.sendMail({
      from: env.EMAIL_USER,
      replyTo: email,
      to: env.EMAIL_USER,
      subject: `📩 New Portfolio Contact - ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      
      <h2 style="color: #2563eb; margin-bottom: 20px;">
        New Portfolio Contact
      </h2>

      <p>
        Someone submitted the contact form from your portfolio website.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; font-weight: bold; width: 100px;">
            Name
          </td>
          <td style="padding: 10px;">
            ${name}
          </td>
        </tr>

        <tr>
          <td style="padding: 10px; font-weight: bold;">
            Email
          </td>
          <td style="padding: 10px;">
            <a href="mailto:${email}">
              ${email}
            </a>
          </td>
        </tr>
      </table>

      <div
        style="
          margin-top: 20px;
          padding: 15px;
          background: #f8fafc;
          border-left: 4px solid #2563eb;
          border-radius: 4px;
        "
      >
        <h3 style="margin-top: 0;">Message</h3>
        <p style="white-space: pre-wrap;">
          ${message}
        </p>
      </div>

      <hr style="margin: 30px 0;" />

      <p style="font-size: 12px; color: #666;">
        Sent from vishalborle.online contact form
      </p>

    </div>
  `,
    });

    res.json({
      success: true,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
    });
  }
});

export default router;

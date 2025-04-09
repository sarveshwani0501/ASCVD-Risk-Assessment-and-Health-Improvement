// const nodemailer = require("nodemailer");

// const sendEmail = async (to, subject, text) => {
//   const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   await transporter.sendMail({
//     from: process.env.EMAIL,
//     to,
//     subject,
//     text,
//   })
// };
// module.exports = sendEmail;

const nodemailer = require("nodemailer");

/**
 * Sends a styled HTML email for password reset
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} resetUrl - Password reset URL
 */
const sendEmail = async (to, subject, resetUrl) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Extract just the token from the URL for security reasons
  const token = resetUrl.split("/").pop();

  // Company details
  const companyName = process.env.COMPANY_NAME || "YourApp";
  const companyLogo =
    process.env.COMPANY_LOGO ||
    "https://via.placeholder.com/200x50?text=YourLogo";
  const supportEmail = process.env.SUPPORT_EMAIL || process.env.EMAIL;
  const primaryColor = "#3b82f6"; // Blue color matching our UI

  // Create HTML email template
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333333;
      margin: 0;
      padding: 0;
      background-color: #f9fafb;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    .email-header {
      background-color: ${primaryColor};
      padding: 24px;
      text-align: center;
    }
    .email-logo {
      max-height: 50px;
      max-width: 200px;
    }
    .email-body {
      padding: 32px 24px;
      background-color: #ffffff;
    }
    h1 {
      color: #111827;
      font-size: 24px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 24px;
    }
    p {
      font-size: 16px;
      margin-bottom: 24px;
    }
    .reset-button {
      display: inline-block;
      background-color: ${primaryColor};
      color: #ffffff !important;
      font-weight: 600;
      font-size: 16px;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      margin: 16px 0;
    }
    .security-notice {
      font-size: 14px;
      color: #6b7280;
      background-color: #f3f4f6;
      padding: 16px;
      border-radius: 6px;
      margin-top: 24px;
    }
    .token-info {
      font-family: monospace;
      background-color: #f3f4f6;
      padding: 12px;
      border-radius: 4px;
      word-break: break-all;
    }
    .email-footer {
      background-color: #f9fafb;
      padding: 24px;
      text-align: center;
      font-size: 14px;
      color: #6b7280;
      border-top: 1px solid #e5e7eb;
    }
    .footer-links a {
      color: #6b7280;
      text-decoration: none;
      margin: 0 8px;
    }
    @media only screen and (max-width: 600px) {
      .email-container {
        width: 100%;
        border-radius: 0;
      }
      .email-body {
        padding: 24px 16px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <img src="${companyLogo}" alt="${companyName}" class="email-logo">
    </div>
    <div class="email-body">
      <h1>Reset Your Password</h1>
      <p>Hello,</p>
      <p>We received a request to reset your password for your account. If you didn't make this request, you can safely ignore this email.</p>
      <p>Click the button below to reset your password:</p>
      <div style="text-align: center;">
        <a href="${resetUrl}" class="reset-button">Reset Password</a>
      </div>
      <p>This password reset link is only valid for 30 minutes.</p>
      <div class="security-notice">
        <strong>Security Notice:</strong>
        <p>If the button above doesn't work, copy and paste the following URL into your browser:</p>
        <div class="token-info">${resetUrl}</div>
        <p>For security reasons, please never share this link with anyone.</p>
      </div>
    </div>
    <div class="email-footer">
      <p>&copy; ${new Date().getFullYear()} ${companyName}. All rights reserved.</p>
      <div class="footer-links">
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="mailto:${supportEmail}">Contact Support</a>
      </div>
      <p>If you didn't request this password reset, please contact our support team immediately.</p>
    </div>
  </div>
</body>
</html>
  `;

  // Send the email
  await transporter.sendMail({
    from: `"${companyName}" <${process.env.EMAIL}>`,
    to,
    subject,
    text: `Reset your password by visiting: ${resetUrl}. This link is valid for 15 minutes.`, // Plain text fallback
    html: htmlContent,
  });
};

module.exports = sendEmail;

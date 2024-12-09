import nodemailer from 'nodemailer';

const sendBookingEmail = async (bookingDetails) => {
  // Use environment variables for sensitive data
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail', // Default to Gmail, customizable via env
    auth: {
      user: process.env.EMAIL_USER, // Your email from environment variables
      pass: process.env.EMAIL_PASS, // Your email password or app password from environment variables
    },
  });

  const mailOptions = {
    from: `"Hotel Helmers" <${process.env.EMAIL_USER}>`,
    to: bookingDetails.email, // Customer email
    subject: `Booking Confirmation - ${bookingDetails.roomType}`,
    html: `
      <h1>Booking Confirmation</h1>
      <p>Dear ${bookingDetails.name},</p>
      <p>Thank you for booking your stay with us!</p>
      <ul>
        <li><strong>Accommodation:</strong> ${bookingDetails.accommodation}</li>
        <li><strong>Check-in:</strong> ${bookingDetails.checkInDate}</li>
        <li><strong>Check-out:</strong> ${bookingDetails.checkOutDate}</li>
        <li><strong>Guests:</strong> ${bookingDetails.adults} Adults, ${bookingDetails.children} Children</li>
        <li><strong>Contact:</strong> ${bookingDetails.phone}</li>
      </ul>
      <p>We look forward to hosting you!</p>
      <p>Regards, <br> Hotel Helmers Team</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully: ${info.messageId}`);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email', error };
  }
};

export default sendBookingEmail;

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.json();

    // Validate required fields (basic validation)
    const {
      email,
      accommodation,
      checkInDate,
      checkOutDate,
      adults,
      children,
      roomType,
      termsAccepted,
    } = formData;

    if (!email || !checkInDate || !checkOutDate || !termsAccepted) {
      return new Response("Missing required fields", { status: 400 });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send confirmation to the user
      subject: "Booking Confirmation - Hotel Helmers",
      text: `Thank you for booking with Hotel Helmers!

Here are your booking details:

- Accommodation: ${accommodation}
- Check-In Date: ${checkInDate}
- Check-Out Date: ${checkOutDate}
- Adults: ${adults}
- Children: ${children}
- Room Type: ${roomType}

We look forward to hosting you!`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond to the client
    return new Response(JSON.stringify({ success: true, message: "Booking confirmed and email sent." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing booking:", error);
    return new Response("Failed to process booking", { status: 500 });
  }
}

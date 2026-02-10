import { Resend } from "resend";

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured");
    return null;
  }
  return new Resend(apiKey);
};

export const sendEmail = async ({
  to,
  subject,
  html,
  from = process.env.EMAIL_FROM || "kontakt@prokolarz.pl",
}: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}) => {
  const resend = getResend();
  
  if (!resend) {
    console.log("Email would be sent (Resend not configured):", { to, subject });
    return { success: true, data: null };
  }

  try {
    const data = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error };
  }
};

export const sendBookingConfirmation = async ({
  to,
  name,
  serviceName,
  date,
  time,
  meetLink,
}: {
  to: string;
  name: string;
  serviceName: string;
  date: string;
  time: string;
  meetLink?: string;
}) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #16a34a;">Potwierdzenie rezerwacji</h1>
      <p>Cześć ${name},</p>
      <p>Twoja rezerwacja została potwierdzona!</p>
      <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Usługa:</strong> ${serviceName}</p>
        <p><strong>Data:</strong> ${date}</p>
        <p><strong>Godzina:</strong> ${time}</p>
        ${meetLink ? `<p><strong>Link do spotkania:</strong> <a href="${meetLink}">${meetLink}</a></p>` : ""}
      </div>
      <p>Do zobaczenia!</p>
    </div>
  `;

  return sendEmail({
    to,
    subject: `Potwierdzenie rezerwacji - ${serviceName}`,
    html,
  });
};

export const sendContactConfirmation = async ({
  to,
  name,
}: {
  to: string;
  name: string;
}) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #16a34a;">Dziękujemy za wiadomość!</h1>
      <p>Cześć ${name},</p>
      <p>Otrzymaliśmy Twoją wiadomość. Odpowiemy najszybciej jak to możliwe.</p>
      <p>Pozdrawiamy,<br>Zespół ProKolarz</p>
    </div>
  `;

  return sendEmail({
    to,
    subject: "Otrzymaliśmy Twoją wiadomość",
    html,
  });
};

export const sendPasswordReset = async ({
  to,
  name,
  resetUrl,
}: {
  to: string;
  name: string;
  resetUrl: string;
}) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #16a34a;">Reset hasła</h1>
      <p>Cześć ${name},</p>
      <p>Otrzymaliśmy prośbę o reset hasła do Twojego konta.</p>
      <p>Kliknij poniższy przycisk, aby ustawić nowe hasło:</p>
      <a href="${resetUrl}" style="display: inline-block; background: #16a34a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0;">Resetuj hasło</a>
      <p>Jeśli to nie Ty prosiłeś o reset hasła, zignoruj tę wiadomość.</p>
      <p>Link jest ważny przez 24 godziny.</p>
    </div>
  `;

  return sendEmail({
    to,
    subject: "Reset hasła - ProKolarz",
    html,
  });
};

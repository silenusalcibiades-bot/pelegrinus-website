export const runtime = "nodejs";

const OWNER_EMAIL = "silenusalcibiades@gmail.com";
const SENDER_EMAIL = "Pelegrinus <herroeping@pelegrinus.org>";
const COURSE_NAME = "Read Latin from the Sources – januari/februari 2027";

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "De online herroepingsfunctie wordt nog ingesteld. Je kunt je herroeping intussen per e-mail sturen naar silenusalcibiades@gmail.com." },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "De gegevens konden niet worden gelezen. Probeer het opnieuw." }, { status: 400 });
  }

  // Honeypot field for basic bot filtering.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const confirmationEmail = typeof body.confirmationEmail === "string" ? body.confirmationEmail.trim().toLowerCase() : "";

  if (name.length < 2 || name.length > 120) {
    return Response.json({ error: "Vul je naam in zoals die bij je inschrijving staat." }, { status: 400 });
  }
  if (!validEmail(email) || !validEmail(confirmationEmail)) {
    return Response.json({ error: "Vul een geldig e-mailadres in." }, { status: 400 });
  }
  if (email !== confirmationEmail) {
    return Response.json({ error: "De e-mailadressen komen niet overeen. Controleer ze allebei." }, { status: 400 });
  }

  const submittedAt = new Date();
  const timestamp = new Intl.DateTimeFormat("nl-NL", {
    dateStyle: "long",
    timeStyle: "medium",
    timeZone: "Europe/Amsterdam",
  }).format(submittedAt);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const statement = `Hierbij verklaar ik, ${name}, dat ik de overeenkomst voor ${COURSE_NAME} herroep. De ontvangstbevestiging mag worden gestuurd naar ${email}.`;

  const messageText = [
    "Ontvangstbevestiging herroeping – Pelegrinus",
    "",
    "We bevestigen de ontvangst van je herroepingsverklaring.",
    "",
    `Naam: ${name}`,
    `E-mailadres: ${email}`,
    `Overeenkomst: ${COURSE_NAME}`,
    `Ontvangen op: ${timestamp} (Europe/Amsterdam)`,
    "",
    "Je verklaring:",
    statement,
    "",
    "De herroeping is ingediend op het hierboven vermelde tijdstip. Bewaar deze e-mail voor je administratie.",
    "",
    "David Kromhout",
    "Pelegrinus",
    OWNER_EMAIL,
  ].join("\n");

  const messageHtml = `<!doctype html>
<html lang="nl">
  <body style="font-family:Arial,sans-serif;line-height:1.6;color:#252923">
    <h1 style="font-size:22px">Ontvangstbevestiging herroeping</h1>
    <p>We bevestigen de ontvangst van je herroepingsverklaring.</p>
    <p><strong>Naam:</strong> ${safeName}<br>
    <strong>E-mailadres:</strong> ${safeEmail}<br>
    <strong>Overeenkomst:</strong> ${escapeHtml(COURSE_NAME)}<br>
    <strong>Ontvangen op:</strong> ${escapeHtml(timestamp)} (Europe/Amsterdam)</p>
    <p><strong>Je verklaring:</strong><br>${escapeHtml(statement)}</p>
    <p>Je verklaring is ingediend op het hierboven vermelde tijdstip. Bewaar deze e-mail voor je administratie.</p>
    <p>David Kromhout<br>Pelegrinus<br><a href="mailto:${OWNER_EMAIL}">${OWNER_EMAIL}</a></p>
  </body>
</html>`;

  const idempotencyKey = request.headers.get("Idempotency-Key") || crypto.randomUUID();

  let resendResponse;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey,
      },
      body: JSON.stringify({
        from: SENDER_EMAIL,
        to: [email],
        bcc: [OWNER_EMAIL],
        reply_to: OWNER_EMAIL,
        subject: "Ontvangstbevestiging herroeping – Pelegrinus",
        text: messageText,
        html: messageHtml,
      }),
      cache: "no-store",
    });
  } catch (error) {
    console.error("Resend request failed:", error);
    return Response.json({ error: "Verzenden is niet gelukt. Probeer het opnieuw of stuur je herroeping per e-mail." }, { status: 502 });
  }

  if (!resendResponse.ok) {
    const detail = await resendResponse.text();
    console.error("Resend rejected withdrawal receipt:", detail);
    return Response.json({ error: "De ontvangstbevestiging kon niet worden verzonden. Probeer het opnieuw of stuur je herroeping per e-mail." }, { status: 502 });
  }

  const result = await resendResponse.json();
  return Response.json({
    ok: true,
    submittedAt: submittedAt.toISOString(),
    confirmationId: result.id || null,
  });
}

"use client";

import { useState } from "react";

export default function WithdrawalForm({ emailConfigured }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [receivedAt, setReceivedAt] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/herroeping", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": crypto.randomUUID(),
        },
        body: JSON.stringify({ name, email, confirmationEmail, website }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Er ging iets mis bij het verzenden.");
      }

      const received = new Date(result.submittedAt);
      setReceivedAt(new Intl.DateTimeFormat("nl-NL", {
        dateStyle: "long",
        timeStyle: "medium",
        timeZone: "Europe/Amsterdam",
      }).format(received));
      setStatus("success");
    } catch (err) {
      setError(err.message || "Er ging iets mis. Probeer het opnieuw.");
      setStatus("error");
    }
  }

  return (
    <div className="withdrawal-panel">
      {!emailConfigured ? (
        <div className="withdrawal-alert" role="status">
          <strong>De online herroepingsfunctie wordt nog ingesteld.</strong>
          <p>Je kunt je herroeping op dit moment per e-mail sturen naar <a href="mailto:silenusalcibiades@gmail.com">silenusalcibiades@gmail.com</a>. Vermeld je naam en Read Latin from the Sources. De online functie wordt actief zodra de automatische ontvangstbevestiging is geconfigureerd.</p>
        </div>
      ) : status === "success" ? (
        <div className="withdrawal-success" role="status">
          <h2>Je herroeping is ontvangen</h2>
          <p>We hebben je herroepingsverklaring op <strong>{receivedAt}</strong> (Nederlandse tijd) ontvangen.</p>
          <p>Een ontvangstbevestiging met je verklaring, de overeenkomst en het tijdstip is per e-mail verzonden naar <strong>{email}</strong>. Bewaar die e-mail voor je administratie.</p>
          <p>Neem contact op via <a href="mailto:silenusalcibiades@gmail.com">silenusalcibiades@gmail.com</a> als je de ontvangstbevestiging niet ontvangt.</p>
        </div>
      ) : (
        <>
          <p>Vul de gegevens in die bij je inschrijving horen. Je hoeft geen reden voor je herroeping op te geven.</p>
          <form className="withdrawal-form" onSubmit={handleSubmit}>
            <label htmlFor="withdrawal-name">Naam waarop je inschrijving staat</label>
            <input
              id="withdrawal-name"
              name="name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={120}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="withdrawal-email">E-mailadres waarmee je je hebt ingeschreven</label>
            <input
              id="withdrawal-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="withdrawal-confirmation-email">E-mailadres voor de ontvangstbevestiging</label>
            <input
              id="withdrawal-confirmation-email"
              name="confirmationEmail"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={confirmationEmail}
              onChange={(event) => setConfirmationEmail(event.target.value)}
            />
            <p className="field-help">Vul hetzelfde adres in als hierboven. De ontvangstbevestiging wordt naar dit adres gestuurd.</p>

            <div className="withdrawal-contract">
              <span className="eyebrow">OVEREENKOMST</span>
              <strong>Read Latin from the Sources</strong>
              <span>Januari/februari 2027 · volledige cursus</span>
            </div>

            <div className="withdrawal-honeypot" aria-hidden="true">
              <label htmlFor="withdrawal-website">Laat dit veld leeg</label>
              <input
                id="withdrawal-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </div>

            {status === "error" && <p className="withdrawal-error" role="alert">{error}</p>}

            <button className="button withdrawal-submit" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Bezig met verzenden…" : "Bevestig ontbinding"}
            </button>
          </form>
        </>
      )}

      <p className="withdrawal-alternative">
        Je kunt je herroeping ook per e-mail sturen naar <a href="mailto:silenusalcibiades@gmail.com">silenusalcibiades@gmail.com</a>.
        Het <a href="https://www.acm.nl/sites/default/files/old_publication/publicaties/12753_modelinstructies-ontbinding-herroeping-2014.pdf" target="_blank" rel="noreferrer">modelformulier voor herroeping (PDF)</a> is eveneens beschikbaar; gebruik daarvan is niet verplicht.
      </p>
    </div>
  );
}

import WithdrawalForm from "./WithdrawalForm";

export const metadata = {
  title: "Herroeping | Pelegrinus",
  description: "Herroep je cursusovereenkomst met Pelegrinus.",
};

export default function WithdrawalPage() {
  const emailConfigured = Boolean(process.env.RESEND_API_KEY);

  return (
    <main className="legal-page">
      <nav className="navigation">
        <a href="/" className="logo">PELEGRINUS</a>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/voorwaarden">Cursusvoorwaarden</a>
          <a href="/privacy">Privacy</a>
        </div>
      </nav>
      <article className="legal-content">
        <p className="eyebrow">PELEGRINUS · CONSUMENTENRECHTEN</p>
        <h1>Herroep je cursusovereenkomst</h1>
        <p>Met deze functie kun je de overeenkomst voor <em>Read Latin from the Sources</em> herroepen. Je hoeft geen reden op te geven. Vul je naam en e-mailadres in en bevestig je verklaring met de knop onderaan.</p>
        <p>Je herroeping geldt op het moment waarop je de verklaring via deze pagina indient. We sturen je daarna onverwijld een ontvangstbevestiging per e-mail met de inhoud van je verklaring en de datum en het tijdstip van indiening.</p>
        <WithdrawalForm emailConfigured={emailConfigured} />
        <p><a href="/voorwaarden">← Terug naar de cursusvoorwaarden</a></p>
      </article>
      <footer>
        <span>PELEGRINUS</span>
        <a href="/privacy">Privacyverklaring</a>
        <a href="/voorwaarden">Cursusvoorwaarden</a>
        <a href="mailto:silenusalcibiades@gmail.com">Contact</a>
      </footer>
    </main>
  );
}

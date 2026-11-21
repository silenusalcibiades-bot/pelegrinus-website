import SiteNavigation from "../components/SiteNavigation";

export const metadata = { title: "Herroepingsrecht | Pelegrinus" };

export default function WithdrawalPage() {
  const withdrawalMail = "mailto:silenusalcibiades@gmail.com?subject=Herroeping%20Read%20Latin%20from%20the%20Sources&body=Aan%3A%20David%20Kromhout%2C%20handelend%20onder%20de%20naam%20Pelegrinus%2C%20Tichelkuilen%20218%2C%207206%20BN%20Zutphen%2C%20silenusalcibiades%40gmail.com%0A%0AHierbij%20deel%20ik%20u%20mede%20dat%20ik%20mijn%20overeenkomst%20betreffende%20de%20dienst%20Read%20Latin%20from%20the%20Sources%20herroep.%0A%0ADatum%20bevestiging%20inschrijving%3A%20%0A%0ANaam%3A%20%0AAdres%3A%20%0A%0ADatum%3A%20";

  return (
    <main className="legal-page">
      <SiteNavigation language="nl" page="withdrawal" />
      <article className="legal-content">
        <p className="eyebrow">PELEGRINUS · CONSUMENTENINFORMATIE</p>
        <h1>Herroepingsrecht</h1>
        <p>Als consument kun je een overeenkomst op afstand in beginsel binnen 14 dagen zonder opgave van redenen herroepen. Voor Read Latin from the Sources ontstaat de overeenkomst wanneer Pelegrinus je deelname per e-mail uitdrukkelijk bevestigt. De bedenktijd loopt vanaf de dag na die bevestiging.</p>
        <p>Om je herroepingsrecht uit te oefenen, stuur je vóór het einde van de termijn een ondubbelzinnige verklaring naar <a href="mailto:silenusalcibiades@gmail.com">silenusalcibiades@gmail.com</a>. Je hoeft geen reden op te geven. Je mag je eigen woorden gebruiken; het onderstaande modelformulier is niet verplicht. De datum waarop je je verklaring verzendt, is bepalend.</p>
        <a className="button" href={withdrawalMail}>Herroeping per e-mail melden →</a>

        <h2>Modelformulier voor herroeping</h2>
        <p><em>(Vul dit formulier alleen in en stuur het terug wanneer je de overeenkomst wilt herroepen.)</em></p>
        <div className="withdrawal-form">
          <p><strong>Aan:</strong><br />David Kromhout, handelend onder de naam Pelegrinus<br />Tichelkuilen 218<br />7206 BN Zutphen<br /><a href="mailto:silenusalcibiades@gmail.com">silenusalcibiades@gmail.com</a></p>
          <p>Hierbij deel ik u mede dat ik mijn overeenkomst betreffende de verrichting van de volgende dienst herroep:</p>
          <p><strong>Dienst:</strong> Read Latin from the Sources – online beginnerscursus Latijn</p>
          <p><strong>Datum bevestiging inschrijving:</strong> ................................................</p>
          <p><strong>Naam consument:</strong> ........................................................................</p>
          <p><strong>Adres consument:</strong> .......................................................................</p>
          <p><strong>Datum:</strong> ........................................................................................</p>
          <p><strong>Handtekening consument:</strong> .........................................................<br /><em>(alleen wanneer dit formulier op papier wordt ingediend)</em></p>
        </div>
        <p><a className="button" href={withdrawalMail}>Dit formulier per e-mail versturen →</a></p>
        <p>Je kunt de overeenkomst ook herroepen met een andere duidelijke verklaring per e-mail of per post. Bewaar een kopie van je verzonden verklaring.</p>
        <p><a href="/voorwaarden">← Terug naar de cursusvoorwaarden</a></p>
      </article>
      <footer><span>PELEGRINUS</span><a href="/privacy">Privacyverklaring</a><a href="/voorwaarden">Cursusvoorwaarden</a><a href="mailto:silenusalcibiades@gmail.com">Contact</a></footer>
    </main>
  );
}

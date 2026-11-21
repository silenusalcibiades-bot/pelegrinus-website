import SiteNavigation from "../../components/SiteNavigation";

export const metadata = {
  title: "Right of Withdrawal | Pelegrinus",
  alternates: { canonical: "/en/withdrawal", languages: { nl: "/herroeping", en: "/en/withdrawal" } },
};

export default function WithdrawalPage() {
  const withdrawalMail = "mailto:silenusalcibiades@gmail.com?subject=Withdrawal%20Read%20Latin%20from%20the%20Sources&body=To%3A%20David%20Kromhout%2C%20trading%20as%20Pelegrinus%2C%20Tichelkuilen%20218%2C%207206%20BN%20Zutphen%2C%20the%20Netherlands%2C%20silenusalcibiades%40gmail.com%0A%0AI%20hereby%20give%20notice%20that%20I%20withdraw%20from%20my%20contract%20for%20the%20service%20Read%20Latin%20from%20the%20Sources.%0A%0ADate%20registration%20was%20confirmed%3A%20%0A%0AName%3A%20%0AAddress%3A%20%0A%0ADate%3A%20";
  return (
    <main className="legal-page">
      <SiteNavigation language="en" page="withdrawal" />
      <article className="legal-content">
        <p className="eyebrow">PELEGRINUS · CONSUMER INFORMATION</p>
        <h1>Right of Withdrawal</h1>
        <p>As a consumer, you may generally withdraw from a distance contract within 14 days without giving a reason. For Read Latin from the Sources, the agreement is formed when Pelegrinus expressly confirms your place by email. The withdrawal period begins on the day after that confirmation.</p>
        <p>To exercise your right, send an unambiguous statement to <a href="mailto:silenusalcibiades@gmail.com">silenusalcibiades@gmail.com</a> before the end of the period. You do not need to give a reason. You may use your own wording; the model form below is optional. The date on which you send your statement is decisive.</p>
        <a className="button" href={withdrawalMail}>Notify withdrawal by email →</a>
        <h2>Model withdrawal form</h2>
        <p><em>(Complete and return this form only if you wish to withdraw from the contract.)</em></p>
        <div className="withdrawal-form">
          <p><strong>To:</strong><br />David Kromhout, trading as Pelegrinus<br />Tichelkuilen 218<br />7206 BN Zutphen<br />The Netherlands<br /><a href="mailto:silenusalcibiades@gmail.com">silenusalcibiades@gmail.com</a></p>
          <p>I hereby give notice that I withdraw from my contract for the provision of the following service:</p>
          <p><strong>Service:</strong> Read Latin from the Sources – online beginners' course in Latin</p>
          <p><strong>Date registration was confirmed:</strong> ................................................</p>
          <p><strong>Consumer's name:</strong> .......................................................................</p>
          <p><strong>Consumer's address:</strong> ....................................................................</p>
          <p><strong>Date:</strong> ........................................................................................</p>
          <p><strong>Consumer's signature:</strong> ..............................................................<br /><em>(only if this form is submitted on paper)</em></p>
        </div>
        <p><a className="button" href={withdrawalMail}>Send this form by email →</a></p>
        <p>You may also withdraw by sending another clear statement by email or post. Keep a copy of the statement you send.</p>
        <p><a href="/en/terms">← Back to the course terms</a></p>
      </article>
      <footer><span>PELEGRINUS</span><a href="/en/privacy">Privacy policy</a><a href="/en/terms">Course terms</a><a href="mailto:silenusalcibiades@gmail.com">Contact</a></footer>
    </main>
  );
}

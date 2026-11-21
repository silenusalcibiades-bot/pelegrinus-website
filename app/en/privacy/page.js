import SiteNavigation from "../../components/SiteNavigation";

export const metadata = {
  title: "Privacy Policy | Pelegrinus",
  alternates: { canonical: "/en/privacy", languages: { nl: "/privacy", en: "/en/privacy" } },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <SiteNavigation language="en" page="privacy" />
      <article className="legal-content">
        <p className="eyebrow">PELEGRINUS</p>
        <h1>Privacy Policy</h1>
        <p><em>Last updated: 18 November 2026</em></p>
        <p>Pelegrinus respects your privacy and handles personal data with care. This policy explains what information is used, why it is used and what rights you have.</p>
        <h2>1. Who is responsible?</h2>
        <p>The data controller is David Kromhout, trading as Pelegrinus, a sole proprietorship established in the Netherlands.</p>
        <ul><li>Email: <a href="mailto:silenusalcibiades@gmail.com">silenusalcibiades@gmail.com</a></li><li>Business address: Tichelkuilen 218, 7206 BN Zutphen, the Netherlands</li><li>Chamber of Commerce number: 88897230</li><li>VAT identification number: NL175749061B01</li></ul>
        <h2>2. What personal data do we process?</h2>
        <p>Depending on your contact with Pelegrinus, we may process:</p>
        <ul><li>your name and email address when you ask a question or register for a course;</li><li>invoice and payment details required for course administration;</li><li>correspondence relating to your enquiry, registration or participation;</li><li>information you provide that is necessary to deliver the course.</li></ul>
        <p>The website does not currently offer account registration or newsletter subscriptions.</p>
        <h2>3. Why do we process your data, and on what legal basis?</h2>
        <ul><li><strong>Enquiries and registrations:</strong> to respond to your request and, if you wish, take steps towards a course agreement (pre-contractual steps).</li><li><strong>Courses and payments:</strong> to perform the course agreement, communicate with you, deliver lessons and process payments (performance of a contract).</li><li><strong>Administration:</strong> to comply with statutory tax and record-keeping obligations (legal obligation).</li></ul>
        <p>Your data is not used for unsolicited marketing and is not sold.</p>
        <h2>4. Who receives your data?</h2>
        <p>Data is shared only where necessary for the purposes described above or to meet a legal obligation. Service providers such as Google (Gmail) and Zoom may process data for email and online lessons. Payment information is processed through the bank. These providers handle data under their own terms and privacy policies.</p>
        <p>The website also uses the Crisp chat service (Crisp IM SAS, France). If you open and use the chat, Crisp may process your messages, IP address and technical browser and device information to answer your enquiry. Crisp uses functional chat cookies to maintain your session. See <a href="https://crisp.chat/en/privacy/" target="_blank" rel="noreferrer">Crisp's privacy policy</a> and <a href="https://crisp.chat/en/cookies/" target="_blank" rel="noreferrer">cookie policy</a>.</p>
        <h2>5. How long do we retain data?</h2>
        <p>Enquiries from people who do not register are retained no longer than necessary to handle the enquiry and any follow-up. Course and contact information is retained for as long as necessary to deliver and administer the course. Invoices and related tax records are retained for seven years where required by Dutch tax law.</p>
        <h2>6. Security</h2>
        <p>Pelegrinus takes appropriate technical and organisational measures to protect personal data and restrict access to it.</p>
        <h2>7. Your rights</h2>
        <p>You may request access to, correction or deletion of your personal data, request restriction of processing, or object to processing. Where processing is based on consent, you may withdraw that consent. You may also lodge a complaint with the Dutch Data Protection Authority (<a href="https://autoriteitpersoonsgegevens.nl/">Autoriteit Persoonsgegevens</a>).</p>
        <p>Send requests to <a href="mailto:silenusalcibiades@gmail.com">silenusalcibiades@gmail.com</a>. To prevent misuse, we may ask you to provide sufficient proof of identity.</p>
        <h2>8. Cookies and website use</h2>
        <p>The website does not use advertising or tracking cookies. The Crisp chat function may place functional cookies to remember a chat session and messages. These cookies support the operation of the chat and are not used for advertising tracking. You can manage or delete cookies in your browser settings. See <a href="https://crisp.chat/en/cookies/" target="_blank" rel="noreferrer">Crisp's cookie policy</a> for more information.</p>
        <h2>9. Changes</h2>
        <p>This privacy policy may be updated if the website, services or applicable law changes. The latest version will be available on this page.</p>
        <p><a href="/en">← Back to Pelegrinus</a></p>
      </article>
      <footer><span>PELEGRINUS</span><a href="/en/terms">Course terms</a><a href="/en/withdrawal">Right of withdrawal</a><a href="mailto:silenusalcibiades@gmail.com">Contact</a></footer>
    </main>
  );
}

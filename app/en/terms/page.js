import SiteNavigation from "../../components/SiteNavigation";

export const metadata = {
  title: "Course Terms | Pelegrinus",
  alternates: { canonical: "/en/terms", languages: { nl: "/voorwaarden", en: "/en/terms" } },
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <SiteNavigation language="en" page="terms" />
      <article className="legal-content">
        <p className="eyebrow">PELEGRINUS · LATIN PILOT 2027</p>
        <h1>Course Terms</h1>
        <p><em>Applicable to Read Latin from the Sources – January/February 2027</em></p>
        <h2>1. Provider</h2>
        <p>The course is provided by David Kromhout, trading as Pelegrinus, a sole proprietorship in the Netherlands. Business address: Tichelkuilen 218, 7206 BN Zutphen, the Netherlands. Chamber of Commerce number: 88897230. VAT identification number: NL175749061B01. Contact: <a href="mailto:silenusalcibiades@gmail.com">silenusalcibiades@gmail.com</a>.</p>
        <h2>2. Course and format</h2>
        <p>Read Latin from the Sources is an online beginners' course in Latin, taught in Dutch. It consists of six live 90-minute lessons via Zoom, on Wednesdays 13, 20 and 27 January and 10, 17 and 24 February 2027, from 19:30 to 21:00 (Netherlands time). There is no lesson on 3 February 2027. In addition to the lessons, approximately 30 minutes of independent practice per week is expected.</p>
        <p>No prior knowledge is required. This is the inaugural edition (founding cohort); participant feedback may be used to improve future editions.</p>
        <h2>3. Registration and agreement</h2>
        <p>An email expressing an intention to register is a request to participate and does not, by itself, constitute a course agreement. The agreement is formed when Pelegrinus expressly confirms your place by email. Places are limited to eight participants. The course will run if at least six participants register.</p>
        <h2>4. Price and payment</h2>
        <p>The price is €225 per participant for the complete course. The course is treated as qualifying education exempt from VAT; no VAT will therefore be charged. After your place is confirmed, you will receive an invoice. Payment is by bank transfer. The payment deadline will be stated on the invoice.</p>
        <h2>5. Right of withdrawal</h2>
        <p>If you are a consumer booking the course at a distance, you generally have a statutory 14-day right to withdraw. This period begins on the day after the course agreement is formed (that is, after Pelegrinus confirms your place by email). You may withdraw within this period without giving a reason.</p>
        <p>If you expressly request that the course begins during this period and then withdraw after the service has started, Pelegrinus may, in accordance with applicable law, charge a proportionate amount for the part of the service already provided at your express request. Your statutory rights remain unaffected.</p>
        <p>You can notify us of your withdrawal by sending a clear statement to <a href="mailto:silenusalcibiades@gmail.com?subject=Withdrawal%20Read%20Latin%20from%20the%20Sources">silenusalcibiades@gmail.com</a>. You do not need to give a reason. You may use the <a href="/en/withdrawal">model withdrawal form</a>, but this is not compulsory. Send your statement before the end of the statutory period; the date of sending is decisive.</p>
        <h2>6. Voluntary cancellation</h2>
        <p>In addition to your statutory right of withdrawal, you may cancel your participation free of charge up to and including 15 calendar days before the first lesson (no later than 29 December 2026). If you cancel after that date, there is no automatic right to a refund outside the statutory right of withdrawal. This does not affect mandatory consumer rights. The statutory withdrawal period may therefore still apply after 29 December 2026, for example if you register shortly before the course begins.</p>
        <h2>7. Cancellation by Pelegrinus</h2>
        <p>If the minimum of six participants is not reached, Pelegrinus may decide not to run the course. In that case, any course fee already paid will be refunded in full. If Pelegrinus cancels the course for another reason, any amount paid for course components not delivered will also be refunded.</p>
        <h2>8. Attendance and missed lessons</h2>
        <p>Lessons take place live online via Zoom. Participants are responsible for having a suitable internet connection and equipment. Missing a lesson does not automatically entitle a participant to a refund. Any course materials supplied are for personal use only.</p>
        <h2>9. Changes</h2>
        <p>If a change to the timetable becomes necessary, Pelegrinus will consult participants as early as reasonably possible. A substantial change gives participants the rights provided by applicable consumer law.</p>
        <h2>10. Complaints and contact</h2>
        <p>Questions or complaints may be sent to <a href="mailto:silenusalcibiades@gmail.com">silenusalcibiades@gmail.com</a>. Pelegrinus aims to provide a substantive response within a reasonable period.</p>
        <h2>11. Governing law</h2>
        <p>The course agreement is governed by Dutch law. Any mandatory consumer protection rights remain in force.</p>
        <p><a href="/en">← Back to Pelegrinus</a></p>
      </article>
      <footer><span>PELEGRINUS</span><a href="/en/privacy">Privacy policy</a><a href="/en/withdrawal">Right of withdrawal</a><a href="mailto:silenusalcibiades@gmail.com">Contact</a></footer>
    </main>
  );
}

import SiteNavigation from "../components/SiteNavigation";

export const metadata = {
  title: "Pelegrinus | Learn Latin. Complete your education.",
  description: "A classical education for curious adults. Learn Latin systematically and discover the literature, history and ideas of the classical world.",
  alternates: { canonical: "/en", languages: { nl: "/", en: "/en" } },
};

export default function EnglishHome() {
  return (
    <main>
      <SiteNavigation language="en" page="home" />
      <section className="hero">
        <p className="eyebrow">PELEGRINUS</p>
        <h1>Learn Latin.<br />Complete your education.</h1>
        <p className="intro">A classical education for curious adults.</p>
        <p>Perhaps you have always wanted to learn Latin. Or perhaps your curiosity has only recently been awakened. Maybe you want to read Seneca for yourself. Perhaps you would like to join Aeneas on his journey from Troy to Italy, or accompany Julius Caesar on campaign in Gaul.</p>
        <p>Whatever your motivation, Latin is an excellent place to begin.</p>
        <a href="#courses" className="button">Discover our Latin courses →</a>
      </section>
      <section id="discover" className="content">
        <p className="eyebrow">DISCOVER LATIN</p><h2>Read the classics in their own words.</h2>
        <p>Our courses help adult students acquire the language skills needed to read Latin literature in the original. You will study grammar and vocabulary systematically, develop your understanding through guided reading, and encounter some of the great authors of the classical tradition.</p>
        <p>Whether you are a complete beginner, returning to Latin after many years, or looking to deepen your existing knowledge, you are welcome here.</p>
      </section>
      <section id="why-latin" className="content">
        <p className="eyebrow">WHY STUDY LATIN?</p><h2>A language that opens a world.</h2>
        <p>For centuries, Latin was a language of scholarship, education, science, literature and public life throughout Europe. Learning Latin gives you direct access to writers such as Caesar, Cicero, Virgil, Ovid and Augustine.</p>
        <p>It also offers a deeper understanding of languages, ideas and institutions that have helped shape European culture. And there are intellectual rewards in the work itself: understanding how a sentence is built, weighing the meaning of a word, and discovering how much a carefully read text can reveal.</p>
      </section>
      <section id="courses" className="content">
        <p className="eyebrow">THE COURSES</p><h2>Learn the language. Read the literature.</h2>
        <p>Pelegrinus offers rigorous language instruction alongside an introduction to classical literature and culture. We work systematically through grammar and vocabulary, practise translation, and move gradually towards reading authentic Latin texts.</p>
        <p>Teaching is structured, explanations are careful, and the aim is to develop genuine skills. The purpose is not merely to learn about Latin, but to learn Latin.</p>
        <div className="course-offer">
          <p className="eyebrow">FOUNDING COHORT · JANUARY 2027</p><h2>Read Latin from the Sources</h2>
          <p><strong>An introduction to reading Latin</strong></p>
          <p>Have you always wanted to learn to read Latin but never had the opportunity to begin? This online beginners' course introduces you to the language over six weeks, using authentic Latin texts. You will acquire the grammatical and linguistic foundations needed to understand texts carefully. No prior knowledge is required.</p>
          <p>The course consists of six live online lessons of 90 minutes each. Allow approximately 30 minutes per week for independent practice in addition to the lessons.</p>
          <ul>
            <li><strong>Dates:</strong> Wednesdays, 13, 20 and 27 January; 10, 17 and 24 February 2027</li>
            <li><strong>Time:</strong> 19:30–21:00 (Netherlands time)</li>
            <li><strong>Format:</strong> Online via Zoom</li>
            <li><strong>Course language:</strong> Dutch</li>
            <li><strong>Level:</strong> Beginners; no prior knowledge required</li>
            <li><strong>Price:</strong> €225 for the complete course</li>
            <li><strong>Group size:</strong> Minimum 6, maximum 8 participants</li>
          </ul>
          <p>This first edition is a founding cohort. You will take part in the inaugural delivery of the course; participants' experience and feedback will help shape future editions.</p>
          <p><strong>Dr David Kromhout</strong> is a teacher of classical languages and a researcher. His academic background is in the classical languages and the study of ancient texts. His teaching places careful reading and understanding of original sources at its centre.</p>
          <p>Please note that the course itself is taught in Dutch. To enquire or register, email us with your name and the course title. I will contact you personally to confirm your place; you will then receive an invoice for €225, payable by bank transfer.</p>
          <a className="button" href="mailto:silenusalcibiades@gmail.com?subject=Registration%20Read%20Latin%20from%20the%20Sources&body=Dear%20David%2C%0A%0AI%20would%20like%20to%20register%20for%20Read%20Latin%20from%20the%20Sources.%0A%0AMy%20name%3A%20">Enquire by email →</a>
        </div>
        <a href="mailto:silenusalcibiades@gmail.com" className="button">Enquire about other courses →</a>
      </section>
      <section id="essays" className="content essays">
        <p className="eyebrow">BEYOND THE CLASSROOM</p><h2>Ideas, texts and reflections.</h2>
        <p>Essays and reflections on classical literature, language, history and the intellectual traditions that continue to shape our world.</p>
        <a href="/en/blog">Explore the blog archive →</a>
      </section>
      <section className="newsletter-band">
        <div>
          <p className="eyebrow">POMPEII · LATIN FROM SCRATCH</p>
          <h2>Read along with the classics.</h2>
          <p>The English-language Silenus Alcibiades, PhD newsletter explores short Latin texts, from inscriptions on ancient walls to Roman poets.</p>
        </div>
        <a className="button" href="https://silenusalcibiadesphd.substack.com" target="_blank" rel="noreferrer">Subscribe to the newsletter ↗</a>
      </section>
      <section id="about" className="content">
        <p className="eyebrow">ABOUT PELEGRINUS</p><h2>A classical education is never out of reach.</h2>
        <p>Serious humanistic education should not be reserved for the young, or for those following a particular academic path. Curiosity has no age limit, and it is never too late to begin studying the languages and texts that have shaped our intellectual inheritance.</p>
        <p>Pelegrinus is the educational project of Dr David Kromhout PhD, teacher and scholar of the classical humanities.</p>
        <a href="#contact">Meet the founder →</a>
      </section>
      <footer id="contact">
        <span>PELEGRINUS</span><span>Learn Latin. Complete your education.</span>
        <a href="/en/blog">Blog</a><a href="https://silenusalcibiadesphd.substack.com" target="_blank" rel="noreferrer">Newsletter</a><a href="mailto:silenusalcibiades@gmail.com">Contact</a><a href="/en/privacy">Privacy</a><a href="/en/terms">Course terms</a><a href="/en/withdrawal">Right of withdrawal</a>
      </footer>
    </main>
  );
}

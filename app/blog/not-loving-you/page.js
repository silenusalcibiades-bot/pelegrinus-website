import SiteNavigation from "../../components/SiteNavigation";

export const metadata = {
  title: "I Don't Love You. I Couldn't Tell You Why. | Pelegrinus",
  description: "Two lines of Martial, explained from scratch: Latin verbs, pronouns, infinitives and the art of the epigram.",
  alternates: { canonical: "/blog/not-loving-you", languages: { nl: "/blog/ik-hou-niet-van-je", en: "/blog/not-loving-you" } },
  openGraph: {
    title: "I Don't Love You. I Couldn't Tell You Why.",
    description: "Two lines of Latin, explained from scratch.",
    type: "article",
  },
};

export default function MartialArticle() {
  return (
    <main>
      <SiteNavigation language="en" page="article" />
      <article className="article">
        <header className="article-header">
          <p className="eyebrow">POMPEII · LATIN FROM SCRATCH</p>
          <h1>I Don't Love You. I Couldn't Tell You Why.</h1>
          <p className="article-deck">Two lines of Latin, explained from scratch</p>
          <p className="blog-meta">By Dr David Kromhout · Martial, <em>Epigrams</em> 1.32</p>
        </header>
        <figure className="article-figure">
          <img src="/images/martial-sabidius-pompeii.jpg" alt="Comic-style scene in Pompeii: one Roman man dismissively turns away while another gestures at a wall bearing Martial's Latin epigram." />
          <figcaption>A Roman exchange worthy of a wall inscription — after Martial, <em>Epigrams</em> 1.32.</figcaption>
        </figure>
        <p>For three weeks we have read Latin from walls. This week we move from the wall to the book, but not far. Martial, a poet from Spain who lived in Rome around the year 100, wrote short, sharp poems that read like graffiti with better handwriting. Here is one of his most famous, and probably the shortest expression of dislike ever put into verse.</p>

        <h2>This week's poem</h2>
        <blockquote className="latin-quotation">
          <p><em>Non amo te, Sabidi, nec possum dicere quare;<br />hoc tantum possum dicere, non amo te.</em></p>
          <cite>Martial, <em>Epigrams</em> 1.32</cite>
        </blockquote>
        <p>Roughly: “I do not love you, Sabidius, and I cannot say why. This much only I can say: I do not love you.”</p>
        <p>Let's take it apart, word by word.</p>
        <ul>
          <li><strong><em>Non amo te</em></strong> means “I do not love you”. Compare last week's <em>amat</em> (“he or she loves”): the ending <em>-o</em> means “I”, and <em>-t</em> means “he or she”. <em>Te</em> is “you” as the object, as in Blog 2.</li>
          <li><strong><em>Sabidi</em></strong> is the man being addressed, just as the wall was addressed with <em>o paries</em>. The ending <em>-i</em> is the vocative, the form used when directly addressing someone. The name is <em>Sabidius</em>.</li>
          <li><strong><em>Nec possum dicere quare</em></strong> means “nor can I say why”. <em>Nec</em> means “nor” or “and not”; <em>possum</em> means “I am able”; <em>dicere</em> is the infinitive, “to say”; and <em>quare</em> means “why”.</li>
          <li><strong><em>Hoc tantum possum dicere</em></strong> means “this alone I can say”. <em>Hoc</em> means “this”, and <em>tantum</em> means “only”.</li>
        </ul>

        <h2>What to notice</h2>
        <p>The poem is built like a joke. The first line sets up an expectation: surely there must be a reason for this dislike. The second line delivers the punchline: there isn't one, or at least Martial isn't going to provide one.</p>
        <p>The last three words, <em>non amo te</em>, are exactly the same as the first three, so the poem ends where it began. Martial's habit is to save the sting for the end. Notice also that the dislike itself is the point: the poem is funny precisely because he cannot, or will not, give a reason.</p>

        <h2>English is still full of this poem</h2>
        <p>Latin is not as far removed from English as you might think. <em>Amo</em> is related to “amorous”; <em>possum</em> gives us “possible”; and <em>dicere</em> is the source of words such as “dictate” and “diction”. These words have travelled a long way from their Latin origins, but their family resemblance is still recognisable.</p>
        <p>The poem itself has also lived on in English. In the 1680s, Tom Brown turned it into the famous rhyme:</p>
        <blockquote className="translation-quotation">
          <p>“I do not love thee, Doctor Fell,<br />The reason why I cannot tell.”</p>
        </blockquote>
        <p>You may know the rhyme without ever having met Martial.</p>

        <h2>About Martial</h2>
        <p>Marcus Valerius Martialis was born in Spain and came to Rome as a young man. He wrote around 1,500 epigrams: short poems about doctors, lawyers, bores, bad poets and dinner guests who steal napkins.</p>
        <p>He often used made-up names for his targets, so Sabidius may never have existed. That, of course, does not make the insult any less effective.</p>

        <section className="article-cta">
          <p className="eyebrow">LEARN LATIN WITH PELEGRINUS</p>
          <h2>Learn to read Latin from the sources.</h2>
          <p>I'm preparing a small live Latin course for adults. We'll work through real Latin texts, learning the language from the ground up, without assuming any previous knowledge.</p>
          <a className="button" href="/#cursussen">Explore the Latin course →</a>
        </section>
        <p className="article-subscribe">Enjoyed this lesson? <a href="https://silenusalcibiadesphd.substack.com" target="_blank" rel="noreferrer">Subscribe to Silenus Alcibiades, PhD on Substack ↗</a> for the next instalment.</p>
        <p className="article-back"><a href="/en/blog">← Back to the blog archive</a></p>
      </article>
      <footer>
        <span>PELEGRINUS</span><span>Learn Latin. Complete your education.</span>
        <a href="/en/blog">Blog</a><a href="https://silenusalcibiadesphd.substack.com" target="_blank" rel="noreferrer">Newsletter</a><a href="mailto:silenusalcibiades@gmail.com">Contact</a>
      </footer>
    </main>
  );
}

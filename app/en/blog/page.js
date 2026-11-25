import SiteNavigation from "../../components/SiteNavigation";

export const metadata = {
  title: "Blog | Pelegrinus",
  description: "Articles and short lessons on Latin, classical literature and the ancient world.",
  alternates: { canonical: "/en/blog", languages: { nl: "/blog", en: "/en/blog" } },
};

export default function EnglishBlogIndex() {
  return (
    <main>
      <SiteNavigation language="en" page="blog" />
      <header className="page-heading">
        <p className="eyebrow">PELEGRINUS · WRITING</p>
        <h1>Blog</h1>
        <p>Texts, ideas and short lessons from the classical world. The newsletter is published in English; each article is labelled with its language.</p>
      </header>
      <section className="blog-list">
        <article className="blog-card">
          <p className="eyebrow">POMPEII · LATIN FROM SCRATCH · ENGLISH</p>
          <a className="blog-image-link" href="/blog/not-loving-you"><img className="blog-image" src="/images/martial-sabidius-pompeii.svg" alt="Pompeii comic illustration of two Romans beside a wall inscription" /></a>
          <h2><a href="/blog/not-loving-you">I Don't Love You. I Couldn't Tell You Why.</a></h2>
          <p className="blog-meta">Martial, <em>Epigrams</em> 1.32 · Two lines of Latin, explained from scratch</p>
          <p>A Roman poet's wonderfully economical expression of dislike — and a chance to learn how Latin verbs, pronouns and infinitives work.</p>
          <a className="text-link" href="/blog/not-loving-you">Read the article →</a>
        </article>
      </section>
      <section className="newsletter-band">
        <div>
          <p className="eyebrow">SILENUS ALCIBIADES, PHD</p>
          <h2>Letters from the classical world.</h2>
          <p>Receive short Latin texts, explanations and reflections in the English-language newsletter.</p>
        </div>
        <a className="button" href="https://silenusalcibiadesphd.substack.com" target="_blank" rel="noreferrer">Subscribe on Substack ↗</a>
      </section>
      <footer>
        <span>PELEGRINUS</span><span>Learn Latin. Complete your education.</span>
        <a href="/en">Home</a><a href="https://silenusalcibiadesphd.substack.com" target="_blank" rel="noreferrer">Newsletter</a><a href="mailto:silenusalcibiades@gmail.com">Contact</a>
      </footer>
    </main>
  );
}

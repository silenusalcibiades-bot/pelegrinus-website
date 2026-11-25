import SiteNavigation from "../components/SiteNavigation";

export const metadata = {
  title: "Blog | Pelegrinus",
  description: "Artikelen en korte lessen over Latijn, klassieke literatuur en de oude wereld.",
  alternates: { canonical: "/blog", languages: { nl: "/blog", en: "/en/blog" } },
};

export default function BlogIndex() {
  return (
    <main>
      <SiteNavigation language="nl" page="blog" />
      <header className="page-heading">
        <p className="eyebrow">PELEGRINUS · PUBLICATIES</p>
        <h1>Blog</h1>
        <p>Teksten, ideeën en korte lessen uit de klassieke wereld. De nieuwsbrief verschijnt in het Engels; bij ieder artikel staat de taal vermeld.</p>
      </header>
      <section className="blog-list">
        <article className="blog-card">
          <p className="eyebrow">POMPEII · LATIN FROM SCRATCH · ENGLISH</p>
          <h2><a href="/blog/not-loving-you">I Don't Love You. I Couldn't Tell You Why.</a></h2>
          <p className="blog-meta">Martial, <em>Epigrams</em> 1.32 · Two lines of Latin, explained from scratch</p>
          <p>A Roman poet's wonderfully economical expression of dislike — and a chance to learn how Latin verbs, pronouns and infinitives work.</p>
          <a className="text-link" href="/blog/not-loving-you">Read the article in English →</a>
        </article>
      </section>
      <section className="newsletter-band">
        <div>
          <p className="eyebrow">SILENUS ALCIBIADES, PHD</p>
          <h2>Ontvang de nieuwsbrief.</h2>
          <p>De Engelstalige nieuwsbrief brengt korte Latijnse teksten, uitleg en beschouwingen rechtstreeks in je inbox.</p>
        </div>
        <a className="button" href="https://silenusalcibiadesphd.substack.com" target="_blank" rel="noreferrer">Abonneer je op Substack ↗</a>
      </section>
      <footer>
        <span>PELEGRINUS</span><span>Leer Latijn. Verrijk je vorming.</span>
        <a href="/">Home</a><a href="https://silenusalcibiadesphd.substack.com" target="_blank" rel="noreferrer">Nieuwsbrief</a><a href="mailto:silenusalcibiades@gmail.com">Contact</a>
      </footer>
    </main>
  );
}

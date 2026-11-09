
export default function Home() {
  return (
    <main>
      <nav className="navigation">
        <a href="/" className="logo">PELEGRINUS</a>
        <div className="nav-links">
          <a href="#onderwijs">Onderwijs</a>
          <a href="#essays">Essays</a>
          <a href="#over">Over mij</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">KLASSIEKE STUDIES · TAAL · TRADITIE</p>
        <h1>Learning is a journey<br />
          through centuries.</h1>
        <p className="intro">
          Een plek voor klassieke talen, joodse
          intellectuele tradities en de kunst van
          zorgvuldig lezen en denken.
        </p>
        <a href="#onderwijs" className="button">
          Ontdek het onderwijs →
        </a>
      </section>

      <section id="onderwijs" className="content">
        <p className="eyebrow">ONDERWIJS</p>
        <h2>Knowledge worth pursuing.</h2>
        <div className="columns">
          <article>
            <h3>Classical Languages</h3>
            <p>Latin, Ancient Greek and the intellectual
              world of classical antiquity.</p>
          </article>
          <article>
            <h3>Jewish Learning</h3>
            <p>Hebrew, Aramaic, Talmud and the
              history of Jewish thought.</p>
          </article>
          <article>
            <h3>Academic Formation</h3>
            <p>Reading, writing and thinking with
              intellectual rigour.</p>
          </article>
        </div>
      </section>

      <section id="essays" className="content essays">
        <p className="eyebrow">SCHRIJVEN & ONDERZOEK</p>
        <h2>Ideas, texts and reflections.</h2>
        <p>Essays and reflections on the humanities,
          intellectual history and the life of learning.</p>
      </section>

      <section id="over" className="content">
        <p className="eyebrow">OVER MIJ</p>
        <h2>A life devoted to learning.</h2>
        <p>Docent klassieke talen, student van joodse
          tradities en liefhebber van de humanistische
          wetenschappen.</p>
      </section>

      <footer id="contact">
        <span>PELEGRINUS</span>
        <span>Learning across traditions and centuries.</span>
      </footer>
    </main>
  );
}

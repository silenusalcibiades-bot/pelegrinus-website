export default function Home() {
  return (
    <main>
      <nav className="navigation">
        <a href="/" className="logo">PELEGRINUS</a>
        <div className="nav-links">
          <a href="#courses">Courses</a>
          <a href="#essays">Essays</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">PELEGRINUS</p>
        <h1>Learn Latin.<br />Complete your education.</h1>
        <p className="intro">A classical education for curious adults.</p>
        <p>
          Maybe you have always wanted to learn Latin. Or perhaps your
          curiosity has only recently been awakened. Maybe you want to read
          Seneca for yourself. Perhaps you would like to join Aeneas on his
          journey from Troy to Italy, or accompany Julius Caesar on campaign
          in Gaul.
        </p>
        <p>Whatever your motivation, Latin is an excellent place to begin.</p>
        <a href="#courses" className="button">Discover our Latin courses →</a>
      </section>

      <section id="discover" className="content">
        <p className="eyebrow">DISCOVER LATIN</p>
        <h2>Read the classics in their own words.</h2>
        <p>
          Our courses help adult students acquire the language skills needed
          to read Latin literature in the original. You will study grammar
          and vocabulary systematically, develop your understanding through
          guided reading, and encounter some of the great authors of the
          classical tradition.
        </p>
        <p>
          Whether you are a complete beginner, returning to Latin after many
          years, or looking to deepen your existing knowledge, you are
          welcome here.
        </p>
      </section>

      <section id="why-latin" className="content">
        <p className="eyebrow">WHY STUDY LATIN?</p>
        <h2>A language that opens a world.</h2>
        <p>
          For centuries, Latin was a language of scholarship, education,
          science, literature and public life throughout Europe. Learning
          Latin gives you direct access to writers such as Caesar, Cicero,
          Virgil, Ovid and Augustine.
        </p>
        <p>
          It also offers a deeper understanding of languages, ideas and
          institutions that have helped shape European culture. And there
          are intellectual rewards in the work itself: understanding how a
          sentence is built, weighing the meaning of a word, and discovering
          how much a carefully read text can reveal.
        </p>
      </section>

      <section id="courses" className="content">
        <p className="eyebrow">THE COURSES</p>
        <h2>Learn the language. Read the literature.</h2>
        <p>
          Pelegrinus offers rigorous language instruction alongside an
          introduction to classical literature and culture. We work
          systematically through grammar and vocabulary, practise
          translation, and move gradually towards reading authentic Latin
          texts.
        </p>
        <p>
          Teaching is structured, explanations are careful, and the aim is
          to develop genuine skills. The purpose is not merely to learn
          about Latin, but to learn Latin.
        </p>
        <a href="mailto:info@pelegrinus.org" className="button">
          Enquire about courses →
        </a>
      </section>

      <section id="essays" className="content essays">
        <p className="eyebrow">BEYOND THE CLASSROOM</p>
        <h2>Ideas, texts and reflections.</h2>
        <p>
          Essays and reflections on classical literature, language, history
          and the intellectual traditions that continue to shape our world.
        </p>
        <a href="#contact">Get in touch to hear about new writing →</a>
      </section>

      <section id="about" className="content">
        <p className="eyebrow">ABOUT PELEGRINUS</p>
        <h2>A classical education is never out of reach.</h2>
        <p>
          Serious humanistic education should not be reserved for the young,
          or for those following a particular academic path. Curiosity has
          no age limit, and it is never too late to begin studying the
          languages and texts that have shaped our intellectual inheritance.
        </p>
        <p>
          Pelegrinus is the educational project of Dr David Kromhout PhD,
          teacher and scholar of the classical humanities.
        </p>
        <a href="#contact">Meet the founder →</a>
      </section>

      <footer id="contact">
        <span>PELEGRINUS</span>
        <span>Learn Latin. Complete your education.</span>
        <a href="mailto:info@pelegrinus.org">Contact</a>
      </footer>
    </main>
  );
}

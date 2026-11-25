import SiteNavigation from "./components/SiteNavigation";

export const metadata = {
  title: "Pelegrinus | Leer Latijn. Verrijk je vorming.",
  description: "Klassieke vorming voor nieuwsgierige volwassenen. Leer systematisch Latijn en ontdek de literatuur, geschiedenis en ideeën van de klassieke wereld.",
  alternates: { canonical: "/", languages: { nl: "/", en: "/en" } },
};

export default function Home() {
  return (
    <main>
      <SiteNavigation language="nl" page="home" />
      <section className="hero">
        <p className="eyebrow">PELEGRINUS</p>
        <h1>Leer Latijn.<br />Verrijk je vorming.</h1>
        <p className="intro">Klassieke vorming voor nieuwsgierige volwassenen.</p>
        <p>Misschien heb je altijd al Latijn willen leren. Of is je nieuwsgierigheid pas onlangs gewekt. Misschien wil je Seneca zelf kunnen lezen. Of met Aeneas meereizen van Troje naar Italië, of Julius Caesar volgen op veldtocht in Gallië.</p>
        <p>Wat je motivatie ook is, Latijn is een uitstekend begin.</p>
        <a href="#cursussen" className="button">Ontdek onze Latijnse cursussen →</a>
      </section>
      <section id="ontdek" className="content">
        <p className="eyebrow">ONTDEK HET LATIJN</p>
        <h2>Lees de klassieken in hun eigen woorden.</h2>
        <p>Onze cursussen helpen volwassen studenten de taalvaardigheid te verwerven die nodig is om Latijnse literatuur in het origineel te lezen. Je bestudeert grammatica en woordenschat systematisch, ontwikkelt je inzicht door begeleid lezen en maakt kennis met enkele van de grote auteurs uit de klassieke traditie.</p>
        <p>Of je nu helemaal bij het begin staat, na vele jaren terugkeert naar het Latijn of je bestaande kennis wilt verdiepen: je bent welkom.</p>
      </section>
      <section id="waarom-latijn" className="content">
        <p className="eyebrow">WAAROM LATIJN LEREN?</p>
        <h2>Een taal die een wereld opent.</h2>
        <p>Eeuwenlang was Latijn in heel Europa de taal van wetenschap, onderwijs, literatuur en het openbare leven. Latijn leren geeft je rechtstreeks toegang tot schrijvers als Caesar, Cicero, Vergilius, Ovidius en Augustinus.</p>
        <p>Het biedt ook een dieper inzicht in de talen, ideeën en instellingen die de Europese cultuur hebben gevormd. En het leerproces zelf heeft een intellectuele beloning: begrijpen hoe een zin is opgebouwd, de betekenis van een woord afwegen en ontdekken hoeveel een zorgvuldig gelezen tekst te bieden heeft.</p>
      </section>
      <section id="cursussen" className="content">
        <p className="eyebrow">DE CURSUSSEN</p>
        <h2>Leer de taal. Lees de literatuur.</h2>
        <p>Pelegrinus biedt gedegen taalonderwijs in combinatie met een kennismaking met de klassieke literatuur en cultuur. We werken systematisch aan grammatica en woordenschat, oefenen met vertalen en bouwen geleidelijk toe naar het lezen van authentieke Latijnse teksten.</p>
        <p>Het onderwijs is gestructureerd, de uitleg zorgvuldig en het doel is dat je echte vaardigheden ontwikkelt. Het gaat niet alleen om iets over Latijn te leren, maar om Latijn te leren.</p>
        <div className="course-offer">
          <p className="eyebrow">EERSTE CURSUSGROEP · JANUARI 2027</p>
          <h2>Read Latin from the Sources</h2>
          <p><strong>Een eerste kennismaking met het Latijn</strong></p>
          <p>Wil je Latijn leren lezen, maar heb je nooit de gelegenheid gehad om ermee te beginnen? In deze online beginnerscursus maak je in zes weken kennis met de taal aan de hand van authentieke Latijnse teksten. Je leert de grammaticale en taalkundige basis die nodig is om teksten zorgvuldig te begrijpen. Er is geen voorkennis vereist.</p>
          <p>De cursus bestaat uit zes live online lessen van 90 minuten. Reken daarnaast op ongeveer 30 minuten zelfstandige oefening per week.</p>
          <ul>
            <li><strong>Data:</strong> woensdag 13, 20 en 27 januari; 10, 17 en 24 februari 2027</li>
            <li><strong>Tijd:</strong> 19.30–21.00 uur (Nederlandse tijd)</li>
            <li><strong>Locatie:</strong> online via Zoom</li>
            <li><strong>Voertaal:</strong> Nederlands</li>
            <li><strong>Niveau:</strong> beginners; geen voorkennis nodig</li>
            <li><strong>Prijs:</strong> €225 voor de volledige cursus</li>
            <li><strong>Groepsgrootte:</strong> minimaal 6, maximaal 8 deelnemers</li>
          </ul>
          <p>Deze eerste editie is een founding cohort. Je neemt deel aan de eerste uitvoering van de cursus; de ervaringen en feedback van deelnemers helpen om toekomstige edities verder te ontwikkelen.</p>
          <p><strong>Dr David Kromhout</strong> is docent klassieke talen en onderzoeker. Hij heeft een academische achtergrond in de klassieke talen en de studie van oude teksten. In zijn onderwijs staat het zorgvuldig lezen en begrijpen van oorspronkelijke bronnen centraal.</p>
          <p>Aanmelden kan per e-mail. Vermeld je naam en dat je je wilt aanmelden voor Read Latin from the Sources. Ik neem persoonlijk contact met je op om je inschrijving te bevestigen; daarna ontvang je een factuur van €225, te betalen per bankoverschrijving.</p>
          <a className="button" href="mailto:silenusalcibiades@gmail.com?subject=Aanmelding%20Read%20Latin%20from%20the%20Sources&body=Beste%20David%2C%0A%0AIk%20wil%20me%20graag%20aanmelden%20voor%20Read%20Latin%20from%20the%20Sources.%0A%0AMijn%20naam%3A%20">Aanmelden per e-mail →</a>
        </div>
        <a href="mailto:silenusalcibiades@gmail.com" className="button">Informeer naar andere cursussen →</a>
      </section>
      <section id="essays" className="content essays">
        <p className="eyebrow">MEER DAN ONDERWIJS</p>
        <h2>Ideeën, teksten en beschouwingen.</h2>
        <p>Essays en beschouwingen over klassieke literatuur, taal, geschiedenis en de intellectuele tradities die onze wereld blijven vormen.</p>
        <a href="/blog">Bekijk het blogarchief →</a>
      </section>
      <section className="newsletter-band">
        <div>
          <p className="eyebrow">POMPEII · LATIJN VANAF HET BEGIN</p>
          <h2>Lees mee met de klassieken.</h2>
          <p>In de Engelstalige nieuwsbrief Silenus Alcibiades, PhD onderzoeken we korte Latijnse teksten, van inscripties op muren tot Romeinse dichters.</p>
        </div>
        <a className="button" href="https://silenusalcibiadesphd.substack.com" target="_blank" rel="noreferrer">Abonneer je op de nieuwsbrief ↗</a>
      </section>
      <section id="over" className="content">
        <p className="eyebrow">OVER PELEGRINUS</p>
        <h2>Klassieke vorming blijft altijd binnen bereik.</h2>
        <p>Serieus humanistisch onderwijs zou niet alleen voor jongeren bestemd moeten zijn, of voor mensen die een bepaald academisch traject volgen. Nieuwsgierigheid kent geen leeftijdsgrens. Het is nooit te laat om de talen en teksten te bestuderen die ons intellectuele erfgoed hebben gevormd.</p>
        <p>Pelegrinus is het onderwijsproject van Dr David Kromhout PhD, docent en onderzoeker op het gebied van de klassieke geesteswetenschappen.</p>
        <a href="#contact">Maak kennis met de oprichter →</a>
      </section>
      <footer id="contact">
        <span>PELEGRINUS</span><span>Leer Latijn. Verrijk je vorming.</span>
        <a href="/blog">Blog</a><a href="https://silenusalcibiadesphd.substack.com" target="_blank" rel="noreferrer">Nieuwsbrief</a><a href="mailto:silenusalcibiades@gmail.com">Contact</a><a href="/privacy">Privacy</a><a href="/voorwaarden">Cursusvoorwaarden</a><a href="/herroeping">Herroepingsrecht</a>
      </footer>
    </main>
  );
}

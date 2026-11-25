import SiteNavigation from "../../components/SiteNavigation";

export const metadata = {
  title: "Ik hou niet van je. Waarom? Dat kan ik niet zeggen. | Pelegrinus",
  description: "Twee regels van Martialis, stap voor stap uitgelegd: Latijnse werkwoorden, voornaamwoorden, infinitieven en de pointe van het epigram.",
  alternates: {
    canonical: "/blog/ik-hou-niet-van-je",
    languages: { nl: "/blog/ik-hou-niet-van-je", en: "/blog/not-loving-you" },
  },
  openGraph: {
    title: "Ik hou niet van je. Waarom? Dat kan ik niet zeggen.",
    description: "Twee regels Latijn, vanaf het begin uitgelegd.",
    type: "article",
  },
};

export default function MartialArticleDutch() {
  return (
    <main>
      <SiteNavigation language="nl" page="article" />
      <article className="article">
        <header className="article-header">
          <p className="eyebrow">POMPEII · LATIJN VANAF HET BEGIN</p>
          <h1>Ik hou niet van je. Waarom? Dat kan ik niet zeggen.</h1>
          <p className="article-deck">Twee regels Latijn, vanaf het begin uitgelegd</p>
          <p className="blog-meta">Door Dr David Kromhout · Martialis, <em>Epigrammen</em> 1.32</p>
        </header>
        <figure className="article-figure">
          <img src="/images/martial-sabidius-pompeii.webp" alt="Humoristische scène in Pompeii: een Romein wendt zich af terwijl een ander naar een Latijnse tekst op een muur wijst." />
          <figcaption>Een Romeinse woordenwisseling die zo op een muur gekalkt had kunnen staan — naar Martialis, <em>Epigrammen</em> 1.32.</figcaption>
        </figure>
        <p>De afgelopen weken lazen we Latijnse teksten op muren. Deze week maken we de overstap van de muur naar het boek, maar niet ver. Martialis, een dichter uit Hispania die rond het jaar 100 in Rome leefde, schreef korte, puntige gedichten. Ze lezen als graffiti, maar dan met een verfijnd gevoel voor vorm. Hier volgt een van zijn bekendste epigrammen, misschien wel de kortste uitdrukking van afkeer die ooit op rijm is gezet.</p>

        <h2>Het gedicht van deze week</h2>
        <blockquote className="latin-quotation">
          <p><em>Non amo te, Sabidi, nec possum dicere quare;<br />hoc tantum possum dicere, non amo te.</em></p>
          <cite>Martialis, <em>Epigrammen</em> 1.32</cite>
        </blockquote>
        <p>Vrij vertaald: ‘Ik houd niet van je, Sabidius, en ik kan niet zeggen waarom. Dit ene kan ik wel zeggen: ik houd niet van je.’</p>
        <p>Laten we de tekst woord voor woord bekijken.</p>
        <ul>
          <li><strong><em>Non amo te</em></strong> betekent ‘Ik houd niet van je’. Vergelijk <em>amat</em> (‘hij of zij houdt van’): de uitgang <em>-o</em> betekent ‘ik’, terwijl <em>-t</em> ‘hij’ of ‘zij’ aanduidt. <em>Te</em> betekent ‘jou’ of ‘je’ als lijdend voorwerp.</li>
          <li><strong><em>Sabidi</em></strong> is de persoon die wordt aangesproken. Denk aan de aanspreekvorm <em>o paries</em> (‘o muur’) die we eerder tegenkwamen. De uitgang <em>-i</em> is hier de vocatief: de naamval waarmee je iemand rechtstreeks aanspreekt. De naam in de nominatief luidt <em>Sabidius</em>.</li>
          <li><strong><em>Nec possum dicere quare</em></strong> betekent ‘en ik kan niet zeggen waarom’. <em>Nec</em> betekent ‘en niet’ of ‘noch’; <em>possum</em> betekent ‘ik kan’; <em>dicere</em> is de infinitief ‘zeggen’; en <em>quare</em> betekent ‘waarom’.</li>
          <li><strong><em>Hoc tantum possum dicere</em></strong> betekent ‘dit alleen kan ik zeggen’. <em>Hoc</em> betekent ‘dit’ en <em>tantum</em> betekent ‘alleen’ of ‘slechts’.</li>
        </ul>

        <h2>Waar moet je op letten?</h2>
        <p>Het gedicht is opgebouwd als een grap. De eerste regel wekt de verwachting dat er toch wel een reden moet zijn voor deze afkeer. De tweede regel levert de pointe: die reden is er niet — of Martialis is in elk geval niet van plan haar te geven.</p>
        <p>De laatste drie woorden, <em>non amo te</em>, zijn precies dezelfde als de eerste drie. Het gedicht eindigt dus waar het begon. Martialis bewaart de angel graag tot het einde. De afkeer zelf is de grap: hij kan, of wil, geen reden geven.</p>

        <h2>Een gedicht dat ook in het Engels voortleeft</h2>
        <p>Het Latijn staat minder ver van het Nederlands en Engels af dan je misschien denkt. <em>Amo</em> is verwant aan ‘amorous’ en ‘amoreus’; <em>possum</em> ligt aan de basis van ‘possible’ en ‘possibel’; <em>dicere</em> herkennen we in woorden als ‘dictaat’ en ‘dictie’. De woorden hebben een lange reis afgelegd, maar de familiegelijkenis is nog zichtbaar.</p>
        <p>Ook het gedicht zelf kreeg een tweede leven. In de jaren 1680 maakte de Engelse schrijver Tom Brown er een bekend rijmpje van:</p>
        <blockquote className="translation-quotation">
          <p>“I do not love thee, Doctor Fell,<br />The reason why I cannot tell.”</p>
        </blockquote>
        <p>Misschien ken je dit rijmpje al, zonder ooit van Martialis te hebben gehoord.</p>

        <h2>Over Martialis</h2>
        <p>Marcus Valerius Martialis werd geboren in Hispania en kwam als jonge man naar Rome. Hij schreef ongeveer 1.500 epigrammen: korte gedichten over artsen, advocaten, vervelende mensen, slechte dichters en tafelgenoten die de servetten meenemen.</p>
        <p>Hij gebruikte vaak verzonnen namen voor zijn mikpunten. Sabidius heeft dus misschien nooit bestaan. Dat maakt de belediging natuurlijk niet minder effectief.</p>

        <section className="article-cta">
          <p className="eyebrow">LEER LATIJN BIJ PELEGRINUS</p>
          <h2>Leer Latijn lezen aan de hand van de bronnen.</h2>
          <p>In de online beginnerscursus voor volwassenen werken we met echte Latijnse teksten. Je leert de taal stap voor stap, zonder dat voorkennis nodig is.</p>
          <a className="button" href="/#cursussen">Bekijk de Latijnse cursus →</a>
        </section>
        <p className="article-subscribe">Vond je deze les interessant? <a href="https://silenusalcibiadesphd.substack.com" target="_blank" rel="noreferrer">Abonneer je op Silenus Alcibiades, PhD op Substack ↗</a> voor de volgende aflevering.</p>
        <p className="article-back"><a href="/blog">← Terug naar het blogarchief</a></p>
      </article>
      <footer>
        <span>PELEGRINUS</span><span>Leer Latijn. Verrijk je vorming.</span>
        <a href="/blog">Blog</a><a href="https://silenusalcibiadesphd.substack.com" target="_blank" rel="noreferrer">Nieuwsbrief</a><a href="mailto:silenusalcibiades@gmail.com">Contact</a>
      </footer>
    </main>
  );
}

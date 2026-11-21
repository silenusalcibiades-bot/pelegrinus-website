export default function SiteNavigation({ language = "nl", page = "home" }) {
  const isEnglish = language === "en";
  const paths = {
    home: { nl: "/", en: "/en" },
    privacy: { nl: "/privacy", en: "/en/privacy" },
    terms: { nl: "/voorwaarden", en: "/en/terms" },
    withdrawal: { nl: "/herroeping", en: "/en/withdrawal" },
  };
  const target = paths[page] || paths.home;
  return (
    <nav className="navigation">
      <a href={isEnglish ? "/en" : "/"} className="logo">PELEGRINUS</a>
      <div className="nav-right">
        <div className="nav-links">
          {isEnglish ? <><a href="/en#courses">Courses</a><a href="/en#essays">Essays</a><a href="/en#about">About</a><a href="/en#contact">Contact</a></> : <><a href="/#cursussen">Cursussen</a><a href="/#essays">Essays</a><a href="/#over">Over mij</a><a href="/#contact">Contact</a></>}
        </div>
        <div className="language-switch" aria-label="Choose language">
          <a href={target.nl} lang="nl" aria-current={!isEnglish ? "page" : undefined} className={!isEnglish ? "active" : ""}>NL</a>
          <span aria-hidden="true">|</span>
          <a href={target.en} lang="en" aria-current={isEnglish ? "page" : undefined} className={isEnglish ? "active" : ""}>EN</a>
        </div>
      </div>
    </nav>
  );
}

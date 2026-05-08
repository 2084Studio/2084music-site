export default function Banner() {
  return (
    <section className="banner">
      <img src="/banner.png" alt="2084 Studio Music" className="banner-image" />
      <a
        href="https://2084Studio.com"
        target="_blank"
        rel="noopener noreferrer"
        className="banner-logo-link"
        aria-label="前往 2084 Studio 主站"
      >
        <img src="/2084logo.png" alt="2084 Studio" className="banner-logo" />
      </a>
    </section>
  );
}

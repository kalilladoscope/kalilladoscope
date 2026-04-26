import { site } from '../content/site';
import { artist } from '../content/artist';
import MandalaPattern from './MandalaPattern';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__brand">
          <div>{site.title}</div>
          <div className="footer__tagline">{site.tagline}</div>
        </div>

        <MandalaPattern size={72} className="footer__mandala" />

        <div className="footer__right">
          <nav className="footer__nav" aria-label="Footer navigation">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="footer__nav-link">
                {item.label}
              </a>
            ))}
            {artist.contact.social.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                className="footer__nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.platform}
              </a>
            ))}
          </nav>

          <p className="footer__credit">{site.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}

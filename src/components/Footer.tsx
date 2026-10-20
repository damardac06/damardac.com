import { BUSINESS } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-image"><img src="/dac_watermark_update.png" alt="Damar DAC General Contractor & Interior" /></span>
            <span className="footer__logo-copy"><strong>DAMAR DAC</strong><small>General Contractor & Interior</small></span>
          </div>
          <p className="footer__tagline">{BUSINESS.tagline}.</p>
          <p className="footer__descriptor">Architecture • Interior • Construction<br />Design & Build Company — Bali, Indonesia</p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Head Quarter</h4>
            <p>{BUSINESS.hqDetail}</p>
          </div>
          <div className="footer__col">
            <h4>Email</h4>
            <p>{BUSINESS.email}</p>
          </div>
          <div className="footer__col">
            <h4>Telepon</h4>
            <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">{BUSINESS.whatsappDisplay}</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright {new Date().getFullYear()} <a href="https://damardac.com">damardac.com</a> — Kontraktor & Custom Interior Bali.</p>
      </div>
    </footer>
  )
}

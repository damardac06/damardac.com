import { BUSINESS } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="hero__bg" aria-hidden="true">
        <img
          src="https://images.pexels.com/photos/35043038/pexels-photo-35043038.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Villa mewah dengan infinity pool di tebing tropis Bali — Damar DAC kontraktor & custom interior"
          fetchPriority="high"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content">
        <p className="hero__small">{BUSINESS.tagline}</p>
        <div className="hero__brand-lockup">
          <img src="/dac_watermark_update.png" alt="Damar DAC General Contractor & Interior" />
        </div>
        <h1 className="hero__title">General Contractor & Interior</h1>
        <div className="hero__divider"></div>
        <p className="hero__desc">
          ARCHITECTURE • INTERIOR • CONSTRUCTION<br />
          <span className="hero__desc-accent">DESIGN & BUILD COMPANY</span>
        </p>
        <p className="hero__location">BERLOKASI DI {BUSINESS.hq.toUpperCase()} — {BUSINESS.area.toUpperCase()}</p>
        <div className="hero__actions">
          <a href="#tentang" className="hero__link-primary">Bagaimana kami membuat kisah</a>
          <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero__link-outline">Hubungi Kami</a>
        </div>
      </div>

      <div className="hero__scroll">
        <span></span>
      </div>
    </section>
  )
}

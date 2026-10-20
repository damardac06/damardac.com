import { useEffect, useState } from 'react'
import { BUSINESS } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#tentang', label: 'Tentang Kami' },
    { href: '#proses', label: 'Alur Kerja' },
    { href: '#proyek', label: 'Portfolio' },
    { href: '#layanan', label: 'Layanan' },
    { href: '#kontak', label: 'Hubungi Kami' },
  ]

  return (
    <header className={`nav ${scrolled || menuOpen ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="/" className="nav__logo" aria-label="Damar DAC beranda">
          <span className="nav__logo-image"><img src="/dac_watermark_update.png" alt="Damar DAC General Contractor & Interior" /></span>
          <span className="nav__logo-copy"><strong>DAMAR DAC</strong><small>General Contractor & Interior</small></span>
        </a>

        <nav className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`} aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="nav__cta-mobile" onClick={() => setMenuOpen(false)}>
            Hubungi Kami
          </a>
        </nav>

        <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="nav__cta">
          Hubungi Kami
        </a>

        <button className={`nav__toggle ${menuOpen ? 'nav__toggle--open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}

import { BUSINESS } from '../data/content'

export default function Contact() {
  return (
    <section className="contact" id="kontak" aria-labelledby="contact-title">
      <div className="contact__inner">
        <p className="section-eyebrow">HUBUNGI KAMI</p>
        <h2 className="section-heading" id="contact-title">
          Proyek Anda berikutnya<br />
          <em>sedang menunggu</em> diceritakan
        </h2>
        <p className="contact__lead">
          Setiap ruang punya cerita. Kami memahami bahwa setiap orang berbeda.
          Karenanya, kami merancang ruang yang sesuai dengan karakter Anda —
          sebagaimana setiap proyek punya kisah sendiri.
        </p>

        <div className="contact__grid">
          <div className="contact__col">
            <h4 className="contact__label">WhatsApp / Telepon</h4>
            <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact__value contact__value--link">
              {BUSINESS.whatsappDisplay}
            </a>
          </div>
          <div className="contact__col">
            <h4 className="contact__label">Workshop & Office</h4>
            <p className="contact__value">{BUSINESS.address}</p>
          </div>
          <div className="contact__col">
            <h4 className="contact__label">Jam Operasional</h4>
            <p className="contact__value">{BUSINESS.hours}</p>
          </div>
          <div className="contact__col">
            <h4 className="contact__label">Media Sosial</h4>
            <div className="contact__socials">
              <a href={BUSINESS.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Damar DAC">FB</a>
              <a href={BUSINESS.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Damar DAC">IG</a>
              <a href={BUSINESS.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok Damar DAC">TT</a>
              <a href={BUSINESS.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Damar DAC">IN</a>
            </div>
          </div>
        </div>

        <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact__btn">
          Konsultasi & Survei Gratis
        </a>
      </div>
    </section>
  )
}

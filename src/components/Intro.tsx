import { BUSINESS } from '../data/content'

export default function Intro() {
  return (
    <section className="intro" id="tentang" aria-labelledby="intro-title">
      <div className="intro__inner">
        <p className="intro__small">PENGHARGAAN</p>
        <h2 className="intro__title" id="intro-title">
          Proyek Anda pantas untuk dirayakan.<br />
          <em>Izinkan kami mewujudkannya</em> dalam bentuk hunian dan ruang impian.
        </h2>
        <p className="intro__text">
          {BUSINESS.fullName} adalah pengembang desain arsitektur dan interior terpercaya yang berbasis di {BUSINESS.hq}.
          Kami menggabungkan keahlian konstruksi dengan workshop furniture sendiri — sehingga setiap proyek
          memiliki kualitas terkontrol dari konsep hingga serah terima kunci. Dari Ubud hingga Canggu,
          dari Denpasar hingga Seminyak — kami siap mewujudkan visi Anda.
        </p>
        <div className="intro__image">
          <img
            src="WhatsApp_Image_2026-10-20_at_11.52.36.jpeg"
            alt="Arsitek Damar DAC merancang blueprint dan gambar kerja untuk proyek villa di Bali"
            loading="lazy"
            width="1200"
            height="800"
          />
        </div>
      </div>
    </section>
  )
}

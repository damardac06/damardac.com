import { testimonials, stats } from '../data/content'

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__inner">
        <p className="section-eyebrow">PENDAPAT MEREKA</p>
        <h2 className="section-heading" id="testimonials-title">
          Apa kata<em> klien</em> kami
        </h2>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial">
              <blockquote className="testimonial__text">"{t.text}"</blockquote>
              <figcaption className="testimonial__author">
                <img src={t.image} alt={`Foto ${t.name}`} loading="lazy" width="56" height="56" />
                <div>
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__role">{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__num">{s.number}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

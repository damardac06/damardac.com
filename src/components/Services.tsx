import { services, deliverables } from '../data/content'

export default function Services() {
  return (
    <section className="services" id="layanan" aria-labelledby="services-title">
      <div className="services__inner">
        <p className="section-eyebrow">LAYANAN KAMI</p>
        <h2 className="section-heading" id="services-title">
          Solusi lengkap dari desain,<br />
          <em>konstruksi,</em> hingga furniture
        </h2>

        <div className="services__grid">
          {services.map((service) => (
            <div key={service.title} className="service">
              <h3 className="service__title">{service.title}</h3>
              <p className="service__desc">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="deliverables">
          <p className="section-eyebrow">PRODUK PERENCANAAN YANG ANDA DAPATKAN</p>
          <div className="deliverables__grid">
            {deliverables.map((item) => (
              <div key={item.title} className="deliverable">
                <span className="deliverable__mark"></span>
                <span className="deliverable__text">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

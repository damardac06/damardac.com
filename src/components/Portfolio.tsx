import { portfolioProjects } from '../data/content'

const specIcons: Record<string, string> = {
  land: 'M3 6l9-3 9 3v14l-9-3-9 3V6z',
  bathroom: 'M4 12V6a2 2 0 012-2h2M4 12h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z',
  floor: 'M3 3h18v18H3zM9 3v18M15 3v18',
  carport: 'M3 16h18M5 16v4M19 16v4M4 12l1.5-5h13L20 12',
  bedroom: 'M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 14h18M7 10V6a1 1 0 011-1h8a1 1 0 011 1v4',
  pool: 'M2 18c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1M2 14c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1',
}

export default function Portfolio() {
  return (
    <section className="portfolio" id="proyek" aria-labelledby="portfolio-title">
      <div className="portfolio__inner">
        <p className="section-eyebrow">PORTFOLIO PILIHAN</p>
        <h2 className="section-heading" id="portfolio-title">
          Beberapa proyek hunian dan<br />
          <em>komersial</em> yang telah kami kerjakan
        </h2>

        <div className="portfolio__list">
          {portfolioProjects.map((project, idx) => (
            <article key={project.name} className={`project ${idx % 2 === 1 ? 'project--reverse' : ''}`}>
              <div className="project__visual">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  width="900"
                  height="700"
                />
                <span className="project__category">{project.category}</span>
              </div>

              <div className="project__info">
                <h3 className="project__name">{project.name}</h3>
                <p className="project__location">{project.location}</p>
                <p className="project__desc">{project.description}</p>

                <div className="project__specs">
                  {project.specs.map((spec) => (
                    <div key={spec.label} className="spec">
                      <div className="spec__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d={specIcons[spec.icon]} />
                        </svg>
                      </div>
                      <div className="spec__text">
                        <span className="spec__value">{spec.value}</span>
                        <span className="spec__label">{spec.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

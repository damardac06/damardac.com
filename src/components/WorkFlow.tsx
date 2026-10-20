import { workFlowSteps } from '../data/content'

export default function WorkFlow() {
  return (
    <section className="workflow" id="proses" aria-labelledby="workflow-title">
      <div className="workflow__inner">
        <p className="section-eyebrow">ALUR KERJA PERENCANAAN</p>
        <h2 className="section-heading" id="workflow-title">
          Setiap tahap dikerjakan dengan<br />
          <em>perhatian penuh</em>
        </h2>

        <div className="workflow__grid">
          {workFlowSteps.map((step) => (
            <div key={step.number} className="workflow-step">
              <div className="workflow-step__num">{step.number}</div>
              <h3 className="workflow-step__title">{step.title}</h3>
              <p className="workflow-step__desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

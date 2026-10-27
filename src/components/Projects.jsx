import { projects } from '../data/content';

export default function Projects() {
  return (
    <section className="section" id="trabajos" aria-labelledby="trabajos-title">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">01 / Trabajos</div>
            <h2 id="trabajos-title">Un poco más<br /><em>de nosotros.</em></h2>
          </div>
          <p className="desc">
            Una selección de propuestas para distintos modos de habitar, desde la primera
            idea hasta los detalles que definen cada espacio.
          </p>
        </div>
        <div className="work-grid">
          {projects.map(({ id, image, alt, category, name }) => (
            <article className="project" key={id}>
              <img src={image} alt={alt} loading="lazy" />
              <div className="project-info">
                <div>
                  <span>{category}</span>
                  <h3>{name}</h3>
                </div>
                <div className="arrow" aria-hidden="true">↗</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

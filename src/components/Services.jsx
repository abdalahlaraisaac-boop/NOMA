import { services } from '../data/content';

export default function Services() {
  return (
    <section className="section dark" id="servicios" aria-labelledby="services-title">
      <div className="container services">
        <div>
          <div className="eyebrow">02 / Servicios</div>
          <h2 id="services-title">Diseño con<br /><em>intención.</em></h2>
          <p className="desc services-intro">
            Acompañamos cada proyecto desde las decisiones generales hasta los detalles de uso y materialidad.
          </p>
          {services.map(({ number, title, description }) => (
            <div className="service-line" key={number}>
              <span className="num">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="service-visual">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1100&q=85"
            alt="Espacio de arquitectura interior cálido y contemporáneo"
          />
        </div>
      </div>
    </section>
  );
}

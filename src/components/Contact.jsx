export default function Contact() {
  return (
    <section className="section contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="container contact">
        <div>
          <div className="eyebrow">04 / Contacto</div>
          <h2 id="contact-title">Todo comienza<br />con una <em>idea.</em></h2>
          <p className="desc">
            Cuéntanos qué espacio tienes en mente y qué te gustaría resolver.
          </p>
        </div>
        <div className="form">
          <div>
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" placeholder="Tu nombre" required autoComplete="name" />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" name="email" type="email" placeholder="hola@ejemplo.com" required autoComplete="email" />
          </div>
          <div>
            <label htmlFor="service">¿Qué tienes en mente?</label>
            <select id="service" name="service" defaultValue="Arquitectura residencial">
              <option>Arquitectura residencial</option>
              <option>Diseño de interiores</option>
              <option>Dirección creativa</option>
              <option>Otro proyecto</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Cuéntanos un poco</label>
            <textarea id="message" name="message" placeholder="¿Qué necesitas para tu espacio?" />
          </div>
        </div>
      </div>
    </section>
  );
}

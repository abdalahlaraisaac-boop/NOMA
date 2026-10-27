export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="eyebrow">
          <span className="rule" aria-hidden="true" />
          Estudio de arquitectura e interiorismo
        </div>
        <h1 id="hero-title">
          Espacios que<br />
          <i>se sienten.</i>
        </h1>
        <p>
          Pensamos cada espacio desde cómo se vive: la luz que recibe, los materiales
          que lo componen y las rutinas que hacen suyo cada lugar.
        </p>
        <a className="main-cta" href="#trabajos">
          Ver trabajos <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="scroll">Conoce el estudio</div>
      <div className="hero-no">01 / 03</div>
    </section>
  );
}

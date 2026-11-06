import { Reveal, Scene, useScene } from 'beatdeck';

function Formacion_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b >= 0} x={150} y={150}>
        <div className="t-eyebrow">// Formación e idiomas</div>
      </Reveal>
      <Reveal on={here && b >= 0} x={150} y={200}>
        <div className="t-statement" style={{ fontSize: 56 }}>CFGS Desarrollo de Aplicaciones Web</div>
        <div className="t-meta" style={{ fontSize: 20, marginTop: 10 }}>I.E.S. Mutxamel · 2023 — 2025 · Matrícula de honor en Programación</div>
      </Reveal>
      <Reveal on={here && b >= 0} x={150} y={360} delay={80}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 24, color: 'var(--ink-2)' }}>
          Estudios de Biología · 2008 — 2013
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 24, color: 'var(--ink)', marginTop: 10 }}>
          Inglés B2 (uso profesional diario) · Español nativo
        </div>
      </Reveal>

      <Reveal on={here && b >= 1} x={150} y={620} delay={100}>
        <div className="t-meta" style={{ fontSize: 18, marginBottom: 20 }}>// Contacto</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 30, color: 'var(--ink)', lineHeight: 2 }}>
          albert9063@gmail.com<br />
          +34 600 360 794<br />
          github.com/aam9063
        </div>
      </Reveal>
    </>
  );
}

/** 08 FORMACIÓN — estudios, idiomas y datos de contacto. */
export const Formacion = () => <Scene index={7}><Formacion_ /></Scene>;

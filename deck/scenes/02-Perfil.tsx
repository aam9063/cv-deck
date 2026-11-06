import { Reveal, Scene, useScene } from 'beatdeck';

function Perfil_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b >= 0} x={150} y={150}>
        <div className="t-eyebrow">// Perfil</div>
      </Reveal>

      <Reveal on={here && b >= 0} x={150} y={210} ms={1100}>
        <div className="t-statement" style={{ fontSize: 92, whiteSpace: 'normal', maxWidth: 1600 }}>
          Full stack con más de un año de experiencia,{' '}
          <span style={{ color: 'var(--accent)' }}>quitando trabajo manual de en medio.</span>
        </div>
      </Reveal>

      <Reveal on={here && b >= 1} x={150} y={500} delay={100}>
        <div className="t-meta" style={{ fontSize: 20, marginBottom: 16 }}>// Lo que he construido</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 30, color: 'var(--ink)', lineHeight: 1.5, maxWidth: 1500 }}>
          <strong>FactuScan</strong> — extracción de datos de documentos, en uso diario en una empresa real.<br />
          <strong>Energy Ops Hub</strong> — facturas y altas de suministros con LLM, reglas de validación en código y PostgreSQL.
        </div>
      </Reveal>

      <Reveal on={here && b >= 2} x={150} y={760} delay={100}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 34, color: 'var(--ink-2)', maxWidth: 1500, fontStyle: 'italic' }}>
          "El LLM lee lo desordenado, el código valida y una persona revisa lo dudoso."
        </div>
      </Reveal>
    </>
  );
}

/** 02 PERFIL — quién soy, qué construyo, cómo trabajo con IA. */
export const Perfil = () => <Scene index={1}><Perfil_ /></Scene>;

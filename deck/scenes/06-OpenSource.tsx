import { Reveal, Scene, useScene } from 'beatdeck';

function OpenSource_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b >= 0} x={150} y={130}>
        <div className="t-eyebrow">// Código abierto</div>
      </Reveal>
      <Reveal on={here && b >= 0} x={150} y={180}>
        <div className="t-statement" style={{ fontSize: 56, whiteSpace: 'normal', maxWidth: 1600 }}>
          Un agente es tan bueno como las herramientas que le das
        </div>
      </Reveal>

      <Reveal on={here && b >= 1} x={150} y={360} delay={100}>
        <div style={{ display: 'flex', gap: 60, maxWidth: 1650 }}>
          <div style={{ flex: 1 }}>
            <div className="t-meta" style={{ fontSize: 18, color: 'var(--accent)', marginBottom: 10 }}>hipoteca-cli</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 24, color: 'var(--ink)', lineHeight: 1.5 }}>
              Índices oficiales del Banco de España (Euríbor, IRPH) para revisión de cuota, amortización y escenarios con
              aritmética decimal exacta. Se niega a adivinar si falta un dato.
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div className="t-meta" style={{ fontSize: 18, color: 'var(--accent)', marginBottom: 10 }}>trafico-cli</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 24, color: 'var(--ink)', lineHeight: 1.5 }}>
              Incidencias de la DGT por carretera, punto kilométrico o ruta, con avisos al móvil y códigos de salida que
              explican el fallo.
            </div>
          </div>
        </div>
        <div className="t-meta" style={{ fontSize: 18, marginTop: 24, color: 'var(--ink-3)' }}>
          Go, MIT, JSON versionado, tests sin red, CI.
        </div>
      </Reveal>

      <Reveal on={here && b >= 2} x={150} y={760} delay={100}>
        <div style={{ borderTop: '1px solid var(--hair)', paddingTop: 28, maxWidth: 1600 }}>
          <div className="t-meta" style={{ fontSize: 18, color: 'var(--accent)', marginBottom: 10 }}>mobile-agent-orchestrator</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 24, color: 'var(--ink)' }}>
            Colaborador externo: 8 PRs fusionadas, tests de 15 a 154, pipeline de publicación en npm con procedencia verificable.
          </div>
        </div>
      </Reveal>
    </>
  );
}

/** 06 CÓDIGO ABIERTO — hipoteca-cli, trafico-cli, contribución a mobile-agent-orchestrator. */
export const OpenSource = () => <Scene index={5}><OpenSource_ /></Scene>;

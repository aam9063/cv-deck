import { Arrow, CountUp, NodeBox, Reveal, Scene, useScene } from 'beatdeck';

function EnergyOpsHub_() {
  const { here, b, entry } = useScene();

  const pdf = { x: 150, y: 520, w: 280, h: 140 };
  const llm = { x: 560, y: 520, w: 280, h: 140 };
  const rules = { x: 970, y: 520, w: 280, h: 140 };
  const hubspot = { x: 1380, y: 520, w: 320, h: 140 };

  const diag = here && b >= 1;

  return (
    <>
      <Reveal on={here && b >= 0} x={150} y={110}>
        <div className="t-eyebrow">// Proyectos — Energy Ops Hub</div>
      </Reveal>
      <Reveal on={here && b >= 0} x={150} y={160}>
        <div className="t-statement" style={{ fontSize: 68, whiteSpace: 'normal', maxWidth: 1600 }}>
          Facturas y altas de suministros, con <span style={{ color: 'var(--accent)' }}>IA que no decide sola</span>
        </div>
      </Reveal>
      <Reveal on={here && b === 0} x={150} y={340} delay={100}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 26, color: 'var(--ink-2)', maxWidth: 1500 }}>
          Proyecto propio con datos sintéticos: facturas PDF de distintas comercializadoras, altas masivas con CUPS mal
          escritos y estados que viven en la cabeza de alguien. Python/FastAPI, PostgreSQL, orquestado con n8n, Google Apps
          Script y HubSpot.
        </div>
      </Reveal>

      <NodeBox rect={pdf} on={diag} kind="entrada" value="Factura PDF" tone="dim" />
      <NodeBox rect={llm} on={diag} kind="llm" value="gpt-4.1-mini" tone="hot" delay={120} />
      <NodeBox rect={rules} on={diag} kind="código" value="11 reglas" tone="normal" delay={240} />
      <NodeBox rect={hubspot} on={diag} kind="salida" value="Ticket en HubSpot" tone="dim" delay={360} />

      <Arrow from={pdf} to={llm} on={diag} flow label="n8n" delay={60} />
      <Arrow from={llm} to={rules} on={diag} flow label="esquema fijo" delay={180} />
      <Arrow from={rules} to={hubspot} on={diag} tone="hot" flow label="si es grave" delay={300} />

      <Reveal on={diag} x={150} y={760} delay={400}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 24, color: 'var(--ink-2)', maxWidth: 1600 }}>
          El LLM pasa cada factura a un esquema fijo; 11 reglas en código detectan duplicadas, totales que no cuadran,
          consumos disparados y CUPS fuera de cartera.
        </div>
      </Reveal>

      <Reveal on={here && b >= 2} x={150} y={850} delay={100}>
        <div style={{ display: 'flex', gap: 100 }}>
          <Stat value={100} suffix="%" label="precisión por campo" entry={entry} />
          <Stat value={18} suffix="/18" label="anomalías detectadas" entry={entry} />
          <Stat value={219} label="tests, 97% cobertura" entry={entry} />
          <Stat value={0.0007} decimals={4} prefix="€" label="por factura procesada" entry={entry} />
        </div>
      </Reveal>
    </>
  );
}

function Stat({ value, suffix = '', prefix = '', decimals = 0, label, entry }: {
  value: number; suffix?: string; prefix?: string; decimals?: number; label: string; entry: number;
}) {
  return (
    <div>
      <div className="t-numeral" style={{ fontSize: 80, color: 'var(--accent)' }}>
        <CountUp value={value} from={0} entry={entry} prefix={prefix} suffix={suffix} decimals={decimals} ms={900} />
      </div>
      <div className="t-meta" style={{ fontSize: 18, marginTop: 6 }}>{label}</div>
    </div>
  );
}

/** 04 ENERGY OPS HUB — flujo PDF → LLM → reglas → HubSpot, con las métricas de evaluación. */
export const EnergyOpsHub = () => <Scene index={3}><EnergyOpsHub_ /></Scene>;

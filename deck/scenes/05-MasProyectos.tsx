import { Reveal, Scene, useScene } from 'beatdeck';

function MasProyectos_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b >= 0} x={150} y={110}>
        <div className="t-eyebrow">// Más proyectos</div>
      </Reveal>

      <Project
        on={here && b >= 0}
        y={190}
        title="FactuScan"
        tag="en uso diario"
        body="PWA que extrae datos de albaranes y facturas en papel o foto con Gemini (Gemma 4) y los vuelca a Excel, con revisión humana antes de exportar. Redujo una tarea de casi 2 días a un par de horas."
      />

      <Project
        on={here && b >= 1}
        y={440}
        title="Shift-Rescue · FirstShift"
        tag="agentes de IA por WhatsApp"
        body="Cubre bajas de última hora en negocios con turnos. Núcleo determinista; el LLM solo interpreta y redacta, el encargado aprueba lo sensible. FastAPI, Strands Agents y Langfuse en AWS EC2. FirstShift añade consola de supervisión y red team."
      />

      <Project
        on={here && b >= 2}
        y={690}
        title="Training Track · CycloAI"
        tag="en desarrollo / proyecto personal"
        body="SaaS para entrenadores de atletismo con Strava e informes con IA, en pruebas con el club. CycloAI: coach de ciclismo en PWA (Next.js) con RAG propio."
      />
    </>
  );
}

function Project({ on, y, title, tag, body }: { on: boolean; y: number; title: string; tag: string; body: string }) {
  return (
    <Reveal on={on} x={150} y={y} delay={60}>
      <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 28, maxWidth: 1600 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <div className="t-statement" style={{ fontSize: 44 }}>{title}</div>
          <div className="t-meta" style={{ fontSize: 18 }}>{tag}</div>
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 24, color: 'var(--ink-2)', marginTop: 10, lineHeight: 1.5 }}>{body}</div>
      </div>
    </Reveal>
  );
}

/** 05 MÁS PROYECTOS — FactuScan, Shift-Rescue/FirstShift, Training Track/CycloAI. */
export const MasProyectos = () => <Scene index={4}><MasProyectos_ /></Scene>;

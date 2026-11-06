import { Reveal, Scene, useScene } from 'beatdeck';

function Stack_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b >= 0} x={150} y={110}>
        <div className="t-eyebrow">// Stack</div>
      </Reveal>

      <Reveal on={here && b >= 0} x={150} y={170} delay={60}>
        <Col title="Backend e integraciones" items={[
          'Python (FastAPI, Celery, pytest), Go, C# / .NET',
          'APIs REST, idempotencia, reintentos, cola de mensajes fallidos',
          'n8n, HubSpot, Google Apps Script',
        ]} />
      </Reveal>
      <Reveal on={here && b >= 0} x={1020} y={170} delay={120}>
        <Col title="Datos y SQL" items={[
          'PostgreSQL, MS SQL Server, Supabase, MongoDB',
          'Validación y calidad de datos',
          'Extracción estructurada de documentos (PDF y foto)',
        ]} />
      </Reveal>

      <Reveal on={here && b >= 1} x={150} y={480} delay={60}>
        <Col title="IA aplicada" items={[
          'OpenAI, Anthropic, Gemini en flujos reales',
          'Salidas estructuradas (Pydantic), RAG',
          'Agentes con herramientas permitidas y aprobación humana (Strands Agents, LangChain)',
          'Evaluación con conjuntos de referencia, Langfuse',
        ]} />
      </Reveal>

      <Reveal on={here && b >= 2} x={1020} y={480} delay={60}>
        <Col title="Front" items={[
          'TypeScript / JavaScript, React, Angular 18-19, Next.js',
        ]} />
      </Reveal>
      <Reveal on={here && b >= 2} x={1020} y={700} delay={140}>
        <Col title="Ways of working" items={[
          'Desarrollo con agentes de IA (Claude Code, gentle-ai), metodología ODD y subagentes',
          'Tests primero, evals, revisión por un agente distinto del que escribe',
          'CI con GitHub Actions y Azure DevOps, Docker',
        ]} />
      </Reveal>
    </>
  );
}

function Col({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ maxWidth: 820 }}>
      <div className="t-meta" style={{ fontSize: 18, color: 'var(--accent)', marginBottom: 12 }}>{title}</div>
      <ul style={{ fontFamily: 'var(--font-sans)', fontSize: 22, color: 'var(--ink)', lineHeight: 1.55, paddingLeft: 26, margin: 0 }}>
        {items.map((it) => <li key={it}>{it}</li>)}
      </ul>
    </div>
  );
}

/** 07 STACK — competencias técnicas agrupadas, en tres beats. */
export const Stack = () => <Scene index={6}><Stack_ /></Scene>;

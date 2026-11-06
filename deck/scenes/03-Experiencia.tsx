import { Reveal, Scene, useScene } from 'beatdeck';

function Experiencia_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b >= 0} x={150} y={130}>
        <div className="t-eyebrow">// Experiencia</div>
      </Reveal>

      <Reveal on={here && b >= 0} x={150} y={180}>
        <div className="t-statement" style={{ fontSize: 64 }}>Fullstack Software Engineer</div>
        <div className="t-meta" style={{ fontSize: 22, marginTop: 10 }}>Softtek, Alicante · sep 2025 — hoy</div>
      </Reveal>

      <Reveal on={here && b >= 1} x={150} y={360} delay={100}>
        <ul style={{ fontFamily: 'var(--font-sans)', fontSize: 28, color: 'var(--ink)', lineHeight: 1.6, maxWidth: 1550, paddingLeft: 32 }}>
          <li>Responsable del ciclo completo — spike técnico hasta producción con CI/CD en Azure DevOps — de un generador e importador de configuración YAML para una plataforma Angular 18-19 / .NET crítica de la división de innovación de <strong>ArcelorMittal</strong>. Sustituyó una tarea manual y tediosa de ingenieros industriales.</li>
          <li style={{ marginTop: 16 }}>Trabaja con cliente y usuarios para entender el problema antes de construir, iterando de extremo a extremo (backend, frontend y diseño). El éxito de la herramienta dio lugar a planes confirmados de más herramientas del mismo tipo.</li>
        </ul>
      </Reveal>

      <Reveal on={here && b >= 2} x={150} y={760} delay={100}>
        <div style={{ borderTop: '1px solid var(--hair)', paddingTop: 28, maxWidth: 1550 }}>
          <div className="t-statement" style={{ fontSize: 44 }}>Frontend Developer</div>
          <div className="t-meta" style={{ fontSize: 20, marginTop: 8, marginBottom: 14 }}>Identival, Alicante · dic 2024 — jun 2025</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 26, color: 'var(--ink-2)' }}>
            Aplicación de gestión de activos inmobiliarios para una empresa nacional de tasación: mejoras de rendimiento (Angular Signals, RxJS) e integración de Mapbox GL.
          </div>
        </div>
      </Reveal>
    </>
  );
}

/** 03 EXPERIENCIA — Softtek y Identival. */
export const Experiencia = () => <Scene index={2}><Experiencia_ /></Scene>;

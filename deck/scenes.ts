import type { SceneDef } from 'beatdeck';

/**
 * The talk's beat map: scenes → beats. One click = one beat.
 * `ref` = where it comes from in the source, `source` = what the source says, `note` = speaker cue
 * (the presenter view shows all three; the audience never does).
 */
export const SCENES: SceneDef[] = [
  {
    id: '01', title: 'OPEN',
    beats: [
      { name: 'standby', note: 'Calm screen while people sit down. The first click starts the talk.' },
      { name: 'title' },
    ],
  },
  {
    id: '02', title: 'PERFIL',
    beats: [
      { name: 'statement', ref: 'PERFIL', source: 'Desarrollador full stack con más de un año de experiencia profesional...', note: 'Quién soy y qué me mueve: quitar trabajo manual de en medio.' },
      { name: 'built', source: 'Ha construido FactuScan... y Energy Ops Hub...' },
      { name: 'criterio', source: 'Su criterio: el LLM lee lo desordenado, el código valida y una persona revisa lo dudoso.', note: 'La frase que resume cómo trabajo con IA.' },
    ],
  },
  {
    id: '03', title: 'EXPERIENCIA',
    beats: [
      { name: 'softtek-role', ref: 'EXPERIENCIA PROFESIONAL', source: 'Fullstack Software Engineer · Softtek (Alicante) · sep 2025 a la actualidad' },
      { name: 'softtek-bullets' },
      { name: 'identival' },
    ],
  },
  {
    id: '04', title: 'ENERGY OPS HUB',
    beats: [
      { name: 'intro', ref: 'PROYECTOS', source: 'Energy Ops Hub · proyecto propio, datos sintéticos' },
      { name: 'diagram', note: 'PDF entra, el LLM lo estructura, el código en reglas decide, HubSpot recibe el resultado.' },
      { name: 'stats', source: 'Evaluado con 120 facturas sintéticas: 100% precisión...' },
    ],
  },
  {
    id: '05', title: 'MÁS PROYECTOS',
    beats: [
      { name: 'factuscan', ref: 'PROYECTOS', source: 'FactuScan · en uso diario' },
      { name: 'shift-rescue', source: 'Shift-Rescue y FirstShift · agentes de IA por WhatsApp' },
      { name: 'training-track', source: 'Training Track · en desarrollo · CycloAI · proyecto personal' },
    ],
  },
  {
    id: '06', title: 'CÓDIGO ABIERTO',
    beats: [
      { name: 'intro', ref: 'CÓDIGO ABIERTO', source: 'hipoteca-cli y trafico-cli · CLIs open source en Go (MIT)...' },
      { name: 'clis' },
      { name: 'contrib', source: 'mobile-agent-orchestrator (repo): colaborador, 8 PRs fusionadas.' },
    ],
  },
  {
    id: '07', title: 'STACK',
    beats: [
      { name: 'backend', ref: 'COMPETENCIAS TÉCNICAS', source: 'Backend e integraciones / Datos y SQL' },
      { name: 'ia', source: 'IA aplicada' },
      { name: 'front-ways', source: 'Front / Ways of working' },
    ],
  },
  {
    id: '08', title: 'FORMACIÓN',
    beats: [
      { name: 'formacion', ref: 'FORMACIÓN E IDIOMAS', source: 'CFGS Desarrollo de Aplicaciones Web · I.E.S. Mutxamel · 2023 a 2025' },
      { name: 'contacto' },
    ],
  },
  {
    id: '09', title: 'END',
    beats: [
      { name: 'questions' },
    ],
  },
];

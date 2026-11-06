# Albert Alarcón Martínez — CV

Mi CV como presentación interactiva en vez de PDF: un escenario fijo 1920×1080 donde cada click es un beat —
perfil, experiencia, proyectos (con diagrama animado de Energy Ops Hub), código abierto, stack y contacto.
Offline, determinista, sin backend.

**Construido con [beatdeck](https://github.com/borjaperfra/beatdeck)**, el motor de talks de
[@borjaperfra](https://github.com/borjaperfra).

## Ver el CV

```bash
npm install
npm run dev          # http://127.0.0.1:5173/#1.1
```

Click o → para avanzar, ← para retroceder, O para la vista general, P para la ventana de presentador.

## Comandos

| | |
| --- | --- |
| `npm run dev` | servidor de desarrollo |
| `npm run build` | compila y genera `dist/` (estático, autocontenido) |
| `npm run present` | build de producción, abierto en local |
| `npm run verify` | recorre cada beat (adelante, atrás, recargado) y compara frames |

## Estructura

El contenido vive en [`deck/`](deck):

```
deck/
  deck.config.ts   título, autor, QR
  scenes.ts        mapa de beats: escenas → beats
  scenes/*.tsx      una escena por archivo
```

El motor (`src/beatdeck/`) nunca se toca a mano — viene de beatdeck y se actualiza con `npm run upgrade`.

## Licencia

MIT para el motor y el código, heredado de [beatdeck](https://github.com/borjaperfra/beatdeck).

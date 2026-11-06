/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  title: 'Albert Alarcón Martínez',
  /** One line under the title. Empty = none. */
  subtitle: 'Junior Product Engineer · Producto, datos e IA aplicada',
  author: 'Albert Alarcón Martínez',
  /** Destination of the QR on the closing screen. "TODO" = no QR (the presenter view warns). Never guess it. */
  qrUrl: 'https://github.com/aam9063',
  /** Shown under the QR, e.g. "example.com/talk". */
  qrLabel: 'github.com/aam9063',
} as const;

import { defineDeck } from 'beatdeck';
import '../themes/neutral.css';
import { config } from './deck.config';
import { SCENES } from './scenes';
import { Open } from './scenes/01-Open';
import { Perfil } from './scenes/02-Perfil';
import { Experiencia } from './scenes/03-Experiencia';
import { EnergyOpsHub } from './scenes/04-EnergyOpsHub';
import { MasProyectos } from './scenes/05-MasProyectos';
import { OpenSource } from './scenes/06-OpenSource';
import { Stack } from './scenes/07-Stack';
import { Formacion } from './scenes/08-Formacion';
import { End } from './scenes/09-End';

/** Every layer of the stage, back to front. All stay mounted; each shows itself for its own scene. */
function Stage() {
  return (
    <>
      <Open />
      <Perfil />
      <Experiencia />
      <EnergyOpsHub />
      <MasProyectos />
      <OpenSource />
      <Stack />
      <Formacion />
      <End />
    </>
  );
}

export default defineDeck({
  id: 'albert-alarcon-cv',
  title: config.title,
  lang: 'es',
  scenes: SCENES,
  Stage,
  fonts: ['400 100px "Inter Variable"', '600 100px "Inter Variable"', '400 32px "JetBrains Mono Variable"'],
  qrUrl: config.qrUrl,
});

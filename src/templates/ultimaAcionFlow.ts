import { addKeyword, EVENTS } from "@builderbot/bot";
import { getUserById,obtenerEstadoUsuario } from "~/services/userService";
const GAIA_IMAGE='https://setas.netlify.app/assets/logo1-CxOIad6E.png';

export  const ultimaAcionFlow = addKeyword(EVENTS.WELCOME)
.addAction(async (ctx, ctxFn) => {
    try {
      const userName = await getUserById(ctx.from);
      const lastAction = await obtenerEstadoUsuario(ctx.from);
      if (lastAction) {
        await ctxFn.flowDynamic([
          { body: `👋 ¡Hola de nuevo, *${userName}*! 😊` },
          {
            body: `La última vez estabas en: *${lastAction}*. ¿Te gustaría continuar o explorar algo más?`,
            media: GAIA_IMAGE,
            buttons: [
              { body: `${lastAction}` },
              { body: 'Menu' },
            ],
          },
        ]);
      } else {
        await ctxFn.flowDynamic([
          {
            body: `👋 ¡Hola de nuevo, *${userName}*!, sigue nuestro menú y explora nuestras opciones 😊`,
            media: GAIA_IMAGE,
            buttons: [{ body: 'Menu' }],
          },
        ]);
      }
    } catch (error) {
      console.error('Error en ultimaAcionFlow:', error);
      await ctxFn.flowDynamic([{ body: '❌ Algo salió mal. Intenta nuevamente más tarde.' }]);
    }
  });
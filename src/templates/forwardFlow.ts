import { addKeyword, EVENTS } from "@builderbot/bot";
import { sendWhatsappMessage } from "~/provider/whatsappService";


const targetNumber = "573157529720";

 const forwardFlow = addKeyword(EVENTS.WELCOME)
 .addAction(async (ctx,ctxFn) => {

    const message =ctx.from
    const body = ctx.body.trim();
    
    console.log('forwardFlow activado',body);
    try {
        await sendWhatsappMessage(targetNumber, `📢 *Nuevo Mensaje* 📢\n\n💬 *De:* ${message}\n📝 *Contenido:* ${body}`);

      console.log("✅ Mensaje enviado correctamente.");
    } catch (error) {
      console.error("❌ Error al enviar el mensaje:", error);
    }

 }).addAnswer('Mensaje enviado correctamente')

  
  
export { forwardFlow }
import { addAnswer, addKeyword, EVENTS } from "@builderbot/bot"
import { ultimaAcionFlow } from "./ultimaAcionFlow";
import { getUserById, obtenerEstadoUsuario, saveUserName } from "~/services/userService";
import { sendWhatsappMessage } from "~/provider/whatsappService";

const GAIA_IMAGE = 'https://setas.netlify.app/assets/logo1-CxOIad6E.png';
const targetNumber = "573105083525";

const mainFlow = addKeyword(EVENTS.WELCOME)
.addAction(async (ctx,ctxFn) => {
   
    const message =ctx.from
    const body = ctx.body.trim(); 
    try {
      const userName =await getUserById(ctx.from)
     console.log('forwardFlow activado',body);
      if(userName){
           console.log(`Usuario registrado: ${userName}`)
           await ctxFn.gotoFlow(ultimaAcionFlow)
      }else{
         await sendWhatsappMessage(targetNumber, `📢 *Nuevo Mensaje* 📢\n\n💬 *De:* ${message}\n📝 *Contenido:* ${body}`);

      console.log("✅ Mensaje enviado correctamente.");
           console.log(`Nuevo usuario detectado: ${ctx.from}`)
          await ctxFn.flowDynamic([
        {
          body:'👋 ¡Hola! Bienvenido a nuestro Chatbot. Soy *Gaia*, tu asistente virtual.',
          media:GAIA_IMAGE
        },{
          body: 'Para brindarte una experiencia personalizada, por favor dime tu nombre. 😊',
        }
      ])
      }


    } catch (error) {
     console.error("❌ Error al enviar el mensaje:", error);
      await ctxFn.flowDynamic([ { body: '❌ Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.' }])
    }
   
     
    
  
 
 }).addAnswer('',{capture:true}, async (ctx,ctxFn) => {
  try {
    const name = ctx.body.trim();
    //Validar el nombre
    if(!/^[a-zA-Z\s]+$/.test(name)&& "Hola"){
      await ctxFn.flowDynamic([ { body: '❌ Por favor, ingresa un nombre válido.' }])
      return;
    }

    // Guardar el nombre del usuario
    await saveUserName(ctx.from,name);
    console.log(`Nombre guardado correctament: ${name}`);
    await ctxFn.flowDynamic([ { body: `¡Encantado de conocerte, ${name}! 😊` }])
  } catch (error) {
    console.error("❌ Error al guardar el nombre:", error);
    await ctxFn.flowDynamic([ { body: '❌ Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.' }])
    
  }
 })
 
 .addAnswer(
  'Somos *SETASPLAST SAS BIC*, especializados en la fabricación y comercialización de productos plásticos *biodegradables* y *100% reciclables* 🌱🌍.  🔒 Conforme a la *Ley 1581 de 2012*, sus datos son tratados conforme a nuestra política de protección de datos. 📄 Consulta nuestra política aquí: 🔗 [Política de Protección de Datos](https://setasplast.com.co/politicas).',
  {
    buttons: [
      { body: 'Catálogo' },
      { body: 'Menu' }, // Opción para el catálogo
  
    ],
  }
  
).addAnswer('✅ *Si continúa con el chat, autoriza su tratamiento.*')
  

    
  
    export { mainFlow }
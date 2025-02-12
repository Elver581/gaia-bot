import { addKeyword } from "@builderbot/bot";
import { updateLastAction } from "~/services/userService";



 export const catalogoFlow = addKeyword(['Catálogo','catalogo'])
.addAction(async (ctx) => {
  // Llamar a updateLastAction
 console.log(`Actualizando last_action para el flujo "Catalogo"`);
 await updateLastAction(ctx.from, 'Catalogo');
})
.addAnswer(
  "📘 *Catálogo de Productos*\nDescubre nuestra amplia gama de productos biodegradables y reciclables.\n\n" +
    "⏰ *Horario de atención:* Lunes a Viernes, 7 a.m. - 5 p.m.\n",
)
.addAnswer(
  "[📘 *Ver Catálogo*]",{
    media:'https://setas.netlify.app/assets/Catalogo-Cv4DpgvU.pdf'
  }
)
.addAnswer('Te interesa alguno de nuestros producto? Conactacte con nuestra area de ventas.',
 
  {
    buttons: [{ body: 'Menu' },{body:'Ventas'}],
   
  }
);

export const contactar = addKeyword('Si')
.addAnswer("Área Comercial, sigue el enlace haciendo clic en el siguiente botón:")
.addAnswer("[💼 *Área Comercial*](https://api.whatsapp.com/send?phone=573145719136&text=Hola)")

export const ventasFlow = addKeyword(['ventas','Ventas'])
  .addAction(async (ctx) => {
    // Llamar a updateLastAction
    console.log(`Actualizando last_action para el flujo "ventas"`);

    await updateLastAction(ctx.from, 'Ventas')
    
    

  })
  .addAnswer(
    "💼 *Área de Ventas*\nEncuentra asesoramiento personalizado para tus compras.\n\n" +
      "⏰ *Horario de atención:* Lunes a Viernes, 7 a.m. - 5 p.m.\n",
  )
  .addAnswer(
    "Haz clic en el siguiente enlace para comunicarte con nuestro equipo de ventas:",
  )
  .addAnswer(
    "[💼 *Ventas*](https://api.whatsapp.com/send?phone=573105083525&text=Hola)",
    {
      buttons: [{ body: 'Menu' }],
    }
  );

  export const pqrFlow = addKeyword(['cliente','Clientes'])
  .addAction(async (ctx) => {
     // Llamar a updateLastAction
    console.log(`Actualizando last_action para el flujo "clientes"`);
    await updateLastAction(ctx.from, 'Clientes');
  
  })
  .addAnswer("Hola, sigue el enlace haciendo clic en el siguiente botón:")
  .addAnswer("[📲 *Atención al Cliente*](https://api.whatsapp.com/send?phone=573105083525&text=Hola)")
  .addAnswer("Para PQR, puedes enviarnos un correo haciendo clic en el botón:")
  .addAnswer("[✉️ *Enviar Correo*](mailto:servicioalclientesetasplast@gmail.com?)", {
    buttons: [
 
      { body: 'Menu' },
 
    ],
  })
  export const gestionAmbiental = addKeyword(['ambiental','Ambiental'])

  .addAction(async (ctx) => {
    // Llamar a updateLastAction
   console.log(`Actualizando last_action para el flujo "ambiental"`);
   await updateLastAction(ctx.from, 'Ambiental');
  
  })
  .addAnswer(
    "🌍 *Gestión Ambiental*\nNos enfocamos en prácticas sostenibles para cuidar el medio ambiente.\n\n" +
      "⏰ *Horario de atención:* Lunes a Viernes, 7 a.m. - 5 p.m.\n",
  )
  .addAnswer(
    "Haz clic en el siguiente enlace para comunicarte con nosotros:",
  )
  .addAnswer(
    "[🌍 *Gestión Ambiental*](https://api.whatsapp.com/send?phone=573143630641&text=Hola)",
    {
      buttons: [{ body: 'Menu' }],
    }
  );

  export const hsqFlow =addKeyword(['hsq','HSQ'])
  .addAction(async (ctx) => {
    // Llamar a updateLastAction
   console.log(`Actualizando last_action para el flujo "HSQ"`);
   await updateLastAction(ctx.from, 'HSQ');

  })
  .addAnswer(
    "📋 *HSQ (Calidad, Seguridad y Salud)*\nGestionamos procesos garantizando calidad y seguridad.\n\n" +
      "⏰ *Horario de atención:* Lunes a Viernes, 7 a.m. - 5 p.m.\n",
  )
  .addAnswer(
    "Haz clic en el siguiente enlace para comunicarte con nosotros:",
  )
  .addAnswer(
    "[📋 *HSQ*](https://api.whatsapp.com/send?phone=573235745012&text=Hola)",
    {
      buttons: [{ body: 'Menu' }],
    }
  );
  export const contabilidadFlow =addKeyword(['contabilidad','Contabilidad'])
  .addAction(async (ctx) => {
    // Llamar a updateLastAction
   console.log(`Actualizando last_action para el flujo "Contabilidad"`);
   await updateLastAction(ctx.from, 'Contabilidad');
  })
  .addAnswer(
    "📊 *Área de Contabilidad*\nConsulta y administra tus registros financieros.\n\n" +
      "⏰ *Horario de atención:* Lunes a Viernes, 7 a.m. - 5 p.m.\n",
  )
  .addAnswer(
    "Haz clic en el siguiente enlace para comunicarte con nosotros:",
  )
  .addAnswer(
    "[📊 *Contabilidad*](https://api.whatsapp.com/send?phone=573147302425&text=Hola)",
    {
      buttons: [{ body: 'Menu' }],
    }
  );


  export const administrativoFlow = addKeyword(['administrativo','Administrativo'])
  .addAction(async (ctx) => {
    // Llamar a updateLastAction
   console.log(`Actualizando last_action para el flujo "administrativo"`);
   await updateLastAction(ctx.from, 'Administrativo');
  })
  .addAnswer(
    "📊 *Área Administrativa*\nBrindamos soporte en gestión administrativa y tesorería.\n\n" +
      "⏰ *Horario de atención:* Lunes a Viernes, 7 a.m. - 5 p.m.\n",
  )
  .addAnswer(
    "Haz clic en el siguiente enlace para comunicarte con nosotros:",
  )
  .addAnswer(
    "[📊 *Administrativa/Tesorería*](https://api.whatsapp.com/send?phone=573147294876&text=Hola)",
    {
      buttons: [{ body: 'Menu' }],
    }
  );
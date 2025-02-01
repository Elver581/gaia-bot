import { addKeyword } from "@builderbot/bot";

 const menuFlow =addKeyword(['Menu','menu'])
.addAnswer(  '✅ Nuestras Opciones',
    
    { capture: false },
    async (ctx, { provider }) => {
      const list = {
        header: {
          type: 'text',
          text: 'Canales de Comunicación',
        },
        body: {
          text: 'Horarios de Atención: Lunes a Viernes, 7 a.m. - 5 p.m. Por favor selecciona el área con la que deseas comunicarte',
        },
        footer: {
          text: 'Gracias por comunicarte con nosotros.',
        },
        action: {
          button: 'Menu Principal',
          sections: [
            {
              title: 'Comercial',
              rows: [
                {
                  id: 'ventas',
                  title: 'Ventas',
                  description: '💼 Comunícate con nuestra área de ventas para una atención personalizada',
                },
                {
                  id: 'cliente',
                  title: 'Atención al cliente',
                  description: ' 🛠 Gestiona tus Peticiones, Quejas y Reclamos con rapidez y efectividad.',
                },
              ],
            },
            {
              title: 'Sistema Gestión Integral',
              rows: [
                {
                  id: 'ambiental',
                  title: 'Gestión Ambiental',
                  description: '🌍 Gestionamos prácticas sostenibles para cuidar el medio ambiente.',
                },
                {
                  id: 'hsq',
                  title: 'HSQ',
                  description: '📋Gestionamos nuestros procesos garantizando calidad.',
                },
              ],
            },
            {
              title: 'Nuestros Productos',
              rows: [
                {
                  id: 'catalogo',
                  title: 'Catálogo',
                  description: '📘Explora nuestra amplia gama de productos y servicios disponibles.',
                },
              ],
            },
            {
              title: 'Administrativo',
              rows: [
                {
                  id: 'contabilidad',
                  title: 'Contabilidad',
                  description: '📊Administra y controla tus registros financieros de manera eficiente.',
                },
                {
                  id: 'administrativo',
                  title: 'Recursos Humanos',
                  description: '👥Atención para clientes y postulantes externos.',
                },
              ],
            },
          ],
        },
      };

      await provider.sendList(ctx.from, list);
    }
  );
export { menuFlow }
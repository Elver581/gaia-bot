import { createFlow } from "@builderbot/bot";
import { mainFlow } from "./mainFlow";
import { forwardFlow } from "./forwardFlow";
import { menuFlow } from "./menuFlow";
import { administrativoFlow, catalogoFlow, contabilidadFlow, gestionAmbiental, hsqFlow, pqrFlow, ventasFlow } from "./opcionesFlow";
import { ultimaAcionFlow } from "./ultimaAcionFlow";



export  default createFlow([
    
    mainFlow,
    menuFlow,
    catalogoFlow,
    ultimaAcionFlow,
    administrativoFlow,
    contabilidadFlow,
    hsqFlow,
    gestionAmbiental,
    pqrFlow,
    ventasFlow
])
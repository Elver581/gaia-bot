
import express from "express"
import {  createBot } from "@builderbot/bot"

import { MemoryDB as  Database } from "@builderbot/bot"
import { provider } from "./provider"
import { config } from "node:process"
import templates from "./templates"



const PORT = process.env.PORT || 47322



    

const main = async () => {


   try { const {handleCtx,   httpServer} = await createBot({
    flow: templates,
    provider: provider,
    database: new Database()
 })
httpServer(+PORT)
console.log(`🤖 Bot iniciado en el puerto ${PORT}`);

   } catch (error) {
      
      console.error("❌ Error al iniciar el bot:", error);
   }

}





main()

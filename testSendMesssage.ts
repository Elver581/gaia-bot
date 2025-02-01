import { sendWhatsappMessage } from "~/provider/whatsappService";

// Número de prueba (incluye el código de país, por ejemplo: "521234567890" para México)
const testRecipient = "521234567890";
const testMessage = "Hola, este es un mensaje de prueba desde senwhatsap.";

(async () => {
  try {
    await sendWhatsappMessage(testRecipient, testMessage);
    console.log("✅ Mensaje enviado correctamente.");
  } catch (error) {
    console.error("❌ Error al enviar el mensaje:", error);
  }
})();

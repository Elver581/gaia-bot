import axios from "axios";
import { config } from "~/config";
export const sendWhatsappMessage = async (recipient: string, message: string): Promise<void> => {
    try {
        const response = await axios.post(
            config.whatsappApiUrl,
            {
                messaging_product: "whatsapp",
                to: recipient,
                type: "text",
                text: { body: message }
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.JWT_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("✅ Mensaje enviado exitosamente:", response.data);
    } catch (error: any) {
        console.error("❌ Error al enviar el mensaje:", error.response?.data || error.message);
        throw error;
    } 
};

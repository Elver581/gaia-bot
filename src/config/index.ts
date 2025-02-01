import dotenv from 'dotenv';
dotenv.config();
console.log('🔍 VERIFY_TOKEN:', process.env.VERIFY_TOKEN);
export const config = {
  jwtToken: process.env.JWT_TOKEN || '',
  numberId: process.env.NUMBER_ID || '',
  verifyToken: process.env.VERIFY_TOKEN || '',
  dbHost: process.env.DB_HOST || 'autorack.proxy.rlwy.net',
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASSWORD || 'FCOiFRhoTgFpsfoeoOFAjfPvguqLUIiF',
  dbName: process.env.DB_NAME || 'railway',
  port: parseInt(process.env.PORT || '47322'),
  whatsappApiUrl:`https://graph.facebook.com/v17.0/${process.env.NUMBER_ID}/messages`

};

if (!config.jwtToken || !config.numberId || !config.verifyToken) {
  throw new Error('Faltan variables de entorno requeridas');
}
// Crear el pool de conexiones
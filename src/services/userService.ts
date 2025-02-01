import { db } from "~/config/db";// Ajusta la ruta según sea necesario

// Guardar usuario en la base de datos

export const saveConversations = async (userId: string, message: string, response: string, context: object) => {
    try {
      await db.execute(
        `INSERT INTO conversations (user_id, message, response, context) VALUES (?, ?, ?, ?)`,
        [userId, message, response, JSON.stringify(context)]
      );
      console.log('✅ Conversación guardada correctamente.');
    } catch (error) {
      console.error('❌ Error al guardar la conversación:', error);
    }
  };

export const saveUserName = async (userId: string, name: string) => {
    try {
      await db.execute(
        `INSERT INTO users (user_id, name) VALUES (?, ?) 
         ON DUPLICATE KEY UPDATE name = ?`,
        [userId, name, name]
      );
      console.log('Nombre guardado correctamente:', userId, name);
    } catch (error) {
      console.error('Error guardando el nombre del usuario:', error);
    }
  };

  export const getUserById = async (userId: string): Promise<string | null> => {
    try {
      const [rows]: any = await db.execute('SELECT name FROM users WHERE user_id = ?', [userId]);
      return rows.length > 0 ? rows[0].name : null;
    } catch (error) {
      console.error('Error obteniendo usuario:', error);
      return null;
    }
  };
  export const updateLastAction = async (userId: string, lastAction: string) => {
    try {
      await db.execute(
        `UPDATE users SET last_action = ? WHERE user_id = ?`,
        [lastAction, userId]
      );
      console.log(`Última acción actualizada para el usuario ${userId}: ${lastAction}`);
    } catch (error) {
      console.error('Error actualizando la última acción:', error);
    }
  };
  export const obtenerEstadoUsuario = async (userId: string) => {
    const [rows]: any = await db.execute(
      `SELECT last_action FROM users WHERE user_id = ? LIMIT 1`,
      [userId]
    );
    return rows.length > 0 ? rows[0].last_action : null;
  };




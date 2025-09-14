import * as SQLite from 'expo-sqlite';

let database

export const initDatabase = async () => {
    if (!database) {
        database = await SQLite.openDatabaseAsync('fashionecommerce.db');
    }
}

export const initSessionTable = async () => {
    //console.log("Iniciando tabla de sesiones")
    await initDatabase();
    await database.execAsync(`
    CREATE TABLE IF NOT EXISTS session (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      localId TEXT,
      email TEXT
    );
  `)
}


export const saveSession = async (localId, email) => {
    await initDatabase();
    await database.runAsync('DELETE FROM session;'); 
    await database.runAsync('INSERT INTO session (localId, email) VALUES (?, ?);', [localId, email]);
}

export const getSession = async () => {
    await initDatabase();
    const result = await database.getAllAsync('SELECT * FROM session LIMIT 1;'); 
    console.log("Obteniendo datos de DB",result)
    return result.length > 0 ? result[0] : null;
};

export const clearSession = async () => {
    await initDatabase();
    await database.runAsync('DELETE FROM session;'); 
};
const Database = require("sqlite-async");

function execute(db) {
  return db.exec(`
    CREATE TABLE IF NOT EXISTS proffys (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      avatar TEXT,
      name TEXT,
      whatsapp TEXT,
      bio TEXT
      );
      
    CREATE TABLE IF NOT EXISTS classes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject INTEGER,
      cost TEXT,
      proffy_id INTEGER
    );
      
    CREATE TABLE IF NOT EXISTS class_schedule (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      class_id INTEGER,
      weekday INTEGER,
      time_from INTERGER,
      time_to INTEGER
    );
  `);
}

module.exports = Database.open(__dirname + "/database.sqlite").then(execute);

const fs = require("fs/promises");
const path = require("path");
const os = require("os");
const Database = require("better-sqlite3");

const initApplication = () => {
  try {
    const dataDir = path.join(os.homedir(), "manga-script-workspaces");
    const sqliteDir = path.join(dataDir, "data.db");

    const db = new Database(sqliteDir);

    db.prepare(
      `
          CREATE TABLE IF NOT EXISTS projects (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          dir TEXT,
          created_at TEXT)`
    ).run();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { initApplication };

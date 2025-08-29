const fs = require("fs/promises");
const path = require("path");
const os = require("os");
const Database = require("better-sqlite3");

let db;

const initApplication = async () => {
  try {
    const dataDir = path.join(os.homedir(), "manga-script-workspaces");
    const sqliteDir = path.join(dataDir, "data.db");

    await fs.mkdir(dataDir, { recursive: true });

    if (!db) {
      db = new Database(sqliteDir);
    }

    db.prepare(
      `
      CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        dir TEXT,
        created_at TEXT
      )
    `
    ).run();

    db.prepare(
      `CREATE TABLE IF NOT EXISTS chapters (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      project_id INTEGER,
      dir TEXT
      created_at TEXT)`
    ).run();

    return true;
  } catch (error) {
    console.error("[InitApplication] Error:", error);
    return false;
  }
};

module.exports = { initApplication, getDb: () => db };

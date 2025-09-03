const fs = require("fs/promises");
const path = require("path");
const { getDb } = require("./initApplication.cjs");

const createChapter = async (projectID) => {
  const db = getDb();

  const projectRow = db
    .prepare(`SELECT dir FROM projects WHERE id = ?`)
    .get(projectID);

  if (!projectRow) {
    throw new Error(`Project with ID ${projectID} not found`);
  }

  const projectDir = projectRow.dir;

  const lastChapter = db
    .prepare(
      `
      SELECT * FROM chapters 
      WHERE project_id = ? 
      ORDER BY id DESC 
      LIMIT 1
    `
    )
    .get(projectID);

  const nextIndex = lastChapter ? lastChapter.id + 1 : 1;

  const chapterDir = path.join(projectDir, `Chapter_${nextIndex}`);
  await fs.mkdir(chapterDir, { recursive: true });

  db.prepare(
    `INSERT INTO chapters (project_id, dir, created_at) VALUES (?, ?, ?)`
  ).run(projectID, chapterDir, new Date().toISOString());

  return chapterDir;
};

module.exports = { createChapter };

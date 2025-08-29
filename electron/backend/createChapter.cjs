const fs = require("fs/promises");
const path = require("path");
const { getDb } = require("./initApplication.cjs");

const createChapter = async (projectID, projectDir, chapterIndex) => {
  const chapterDir = path.join(projectDir, "Chapter_" + chapterIndex);
  await fs.mkdir(chapterDir, { recursive: true });

  const db = getDb();
  const newChapter = db.prepare(
    `INSERT INTO chapters (project_id, dir, created_at) VALUES(?, ?, ?)`
  );

  newChapter.run(projectID, projectDir, new Date().toISOString());

  return chapterDir;
};

module.exports = { createChapter };

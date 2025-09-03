const { getDb } = require("./initApplication.cjs");

const fetchProjectData = async (id) => {
  try {
    const db = getDb();

    const projectData = db
      .prepare(`SELECT * FROM projects WHERE id = ?`)
      .get(id);

    const lastChapter = db
      .prepare(
        `
      SELECT * FROM chapters
      WHERE project_id = ? 
      ORDER BY id DESC LIMIT 1
      `
      )
      .get(id);

    projectData.lastChapterIndex = lastChapter ? lastChapter.id : 0;

    return projectData;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { fetchProjectData };

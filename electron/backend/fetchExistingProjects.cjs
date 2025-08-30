const { getDb } = require("./initApplication.cjs");

const fetchExistingProjects = async () => {
  try {
    const db = getDb();
    const existingProjects = await db.prepare(`SELECT * FROM projects`).all();
    // console.log(existingProjects);
    return existingProjects;
  } catch (error) {
    console.error("Error from backend: " + error);
  }
};

module.exports = { fetchExistingProjects };

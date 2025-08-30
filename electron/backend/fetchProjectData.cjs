const { getDb } = require("./initApplication.cjs");

const fetchProjectData = async (id) => {
  try {
    const db = getDb();

    const projectData = db
      .prepare(`SELECT * FROM projects WHERE id = ?`)
      .get(id);

    // console.log("Project data query, " + JSON.stringify(projectData, null, 2));

    return JSON.stringify(projectData, null, 2);
    // return projectData;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { fetchProjectData };

// fetchProjectData(1);

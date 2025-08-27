const fs = require("fs/promises");
const path = require("path");
const os = require("os");

const createProject = async (projectName) => {
  try {
    const workspaceDir = path.join(os.homedir(), "manga-script-workspaces");
    const projectDir = path.join(workspaceDir, projectName);

    await fs.mkdir(workspaceDir, { recursive: true });
    await fs.mkdir(projectDir, { recursive: true });

    return projectDir;
  } catch (err) {
    console.error("[Backend] Error creating project:", err);
    throw err;
  }
};

module.exports = { createProject };

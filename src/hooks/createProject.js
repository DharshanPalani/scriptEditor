import { promises } from "fs";
import fs from "fs";
import os from "os";
import path from "path";

const createProject = async (projectName) => {
  const workspaceDir = path.join(os.homedir(), "manga-script-workspaces");
  const newProjectDirInit = path.join(workspaceDir, projectName);
  try {
    if (fs.existsSync(workspaceDir)) {
      await promises.mkdir(newProjectDirInit);
    } else {
      await promises.mkdir(workspaceDir);
      await promises.mkdir(newProjectDirInit);
    }
  } catch (error) {
    console.log("Errof from create Projec: " + error);
  }
};

export default createProject;

const path = require("path");
const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const { createProject } = require("./backend/createProject.cjs");
const { initApplication } = require("./backend/initApplication.cjs");
const { createChapter } = require("./backend/createChapter.cjs");
const { fetchProjectData } = require("./backend/fetchProjectData.cjs");
const {
  fetchExistingProjects,
} = require("./backend/fetchExistingProjects.cjs");

if (process.env.NODE_ENV !== "production") {
  require("electron-reload")(path.join(__dirname, ".."), {
    electron: path.join(__dirname, "..", "node_modules", ".bin", "electron"),
    hardResetMethod: "exit",
  });
}

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  Menu.setApplicationMenu(null);

  if (process.env.NODE_ENV !== "production") {
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  }
});

ipcMain.handle("create-project", async (_event, projectName) => {
  const result = await createProject(projectName);
  return result;
});

ipcMain.handle("init-application", (_event) => {
  const result = initApplication();
  return result;
});

ipcMain.handle("create-chapter", async (_event, projectID) => {
  const result = createChapter(projectID);
  return result;
});

ipcMain.handle("fetch-project-data", async (_event, id) => {
  const result = await fetchProjectData(id);
  // console.log("Main result for fetching, " + result);
  return result;
});

ipcMain.handle("fetch-existing-projects", async (_event) => {
  const result = await fetchExistingProjects();
  console.log("Main result for fetching " + result);
  return result;
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

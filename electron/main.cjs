const path = require("path");
const { app, BrowserWindow, Menu } = require("electron");

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
      preload: path.join(__dirname, "preload.js"),
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

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

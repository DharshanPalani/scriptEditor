const { contextBridge, ipcRenderer } = require("electron");

console.log("[Preload] Loaded");

contextBridge.exposeInMainWorld("api", {
  createProject: (name) => {
    console.log("[Preload] Sending IPC create-project:", name);
    return ipcRenderer.invoke("create-project", name);
  },
});

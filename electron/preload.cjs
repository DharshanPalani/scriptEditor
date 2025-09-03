const { contextBridge, ipcRenderer } = require("electron");

console.log("[Preload] Loaded");

contextBridge.exposeInMainWorld("api", {
  createProject: (name) => {
    console.log("[Preload] Sending IPC create-project:", name);
    return ipcRenderer.invoke("create-project", name);
  },

  initApplication: () => {
    console.log("[Preload] Sending IPC init-application");
    return ipcRenderer.invoke("init-application");
  },

  createChapter: (projectID) => {
    console.log("[Preload] Sending IPC create-chapter");
    return ipcRenderer.invoke("create-chapter", projectID);
  },

  fetchProjectData: (id) => {
    console.log("[Preload] Sending IPC fetch-project-data", id);
    return ipcRenderer.invoke("fetch-project-data", id);
  },
  fetchExistingProjects: () => {
    console.log("[Preload] Sending IPC fetching-existing-projects");
    return ipcRenderer.invoke("fetch-existing-projects");
  },
});

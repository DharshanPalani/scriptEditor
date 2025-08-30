import { HashRouter, Routes, Route } from "react-router-dom";
import EditorView from "./pages/EditorView.jsx";
import Menu from "./pages/Menu.jsx";
import ProjectView from "./pages/ProjectView.jsx";
import NewProjectView from "./pages/NewProjectView.jsx";
import { useEffect } from "react";
import useInitApplication from "./hooks/useInitApplication.js";
import OpenProjectView from "./pages/OpenProjectView.jsx";

function App() {
  const { initApplication } = useInitApplication();

  useEffect(() => {
    initApplication();
  }, []);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path={"/project/:id"} element={<ProjectView />} />
        <Route path="/editor" element={<EditorView />} />
        <Route path="/new-project" element={<NewProjectView />} />
        <Route path="/open-project" element={<OpenProjectView />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

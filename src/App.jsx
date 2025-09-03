import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import EditorView from "./pages/EditorView.jsx";
import Menu from "./pages/Menu.jsx";
import ProjectView from "./pages/ProjectView.jsx";
import NewProjectView from "./pages/NewProjectView.jsx";
import { useEffect } from "react";
import useInitApplication from "./hooks/useInitApplication.js";
import OpenProjectView from "./pages/OpenProjectView.jsx";

function App() {
  const { initApplication } = useInitApplication();

  const navigate = useNavigate();

  useEffect(() => {
    initApplication();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        navigate(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path={"/project/:id"} element={<ProjectView />} />
      <Route path="/editor/:chapter_id" element={<EditorView />} />
      <Route path="/new-project" element={<NewProjectView />} />
      <Route path="/open-project" element={<OpenProjectView />} />
    </Routes>
  );
}

export default App;

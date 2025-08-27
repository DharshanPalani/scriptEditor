import { HashRouter, Routes, Route } from "react-router-dom";
import EditorView from "./pages/EditorView.jsx";
import Menu from "./pages/Menu.jsx";
import ProjectView from "./pages/ProjectView.jsx";
import NewProjectView from "./pages/NewProjectView.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path={"/project/:id"} element={<ProjectView />} />
        <Route path="/editor" element={<EditorView />} />
        <Route path="/new-project" element={<NewProjectView />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

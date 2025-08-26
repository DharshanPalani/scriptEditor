import { HashRouter, Routes, Route } from "react-router-dom";
import EditorView from "./pages/EditorView.jsx";
import Menu from "./pages/Menu.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/editor" element={<EditorView />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

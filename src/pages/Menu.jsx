import "../css/Menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  // const handleNewProject = async () => {};

  return (
    <div className="menu-app">
      <h1 className="menu-title">Manga Editor</h1>
      <button className="menu-btn" onClick={() => navigate("/new-project")}>
        New Project
      </button>
      <button className="menu-btn" onClick={() => navigate("/open-project")}>
        Open a project
      </button>
    </div>
  );
}

export default Menu;

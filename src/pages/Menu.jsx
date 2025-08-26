import React from "react";
import "../css/Menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const handleNewProject = () => {
    navigate("/project/1234");
  };

  return (
    <div className="menu-app">
      <h1 className="menu-title">Manga Editor</h1>
      <button className="menu-btn" onClick={() => handleNewProject()}>
        New Project
      </button>
      <button className="menu-btn">Open Project</button>
    </div>
  );
}

export default Menu;

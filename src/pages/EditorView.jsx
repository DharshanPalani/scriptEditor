import React, { useEffect, useState } from "react";
import "../css/EditorView.css";
import { useNavigate } from "react-router-dom";
function EditorView() {
  const [text, setText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Clicked Shi");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleHomeBtn = () => {
    navigate("/");
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-btn-small-container">
          <button
            className="sidebar-btn-small btn-hover"
            onClick={() => handleHomeBtn()}
          >
            Home
          </button>
          <button className="sidebar-btn-small btn-hover">Minimize</button>
        </div>
        <button className="sidebar-btn btn-hover">+ New Page</button>
      </div>

      <div className="main">
        <input className="editor-title-area" type="text" />
        <textarea
          className="editor-text-area"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=""
        ></textarea>
      </div>
    </div>
  );
}

export default EditorView;

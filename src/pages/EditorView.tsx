import React, { useState } from "react";
import "../css/EditorView.css";
function EditorView() {
  const [text, setText] = useState("");

  return (
    <div className="app">
      <div className="sidebar">
        <button className="sidebar-btn">+ New Page</button>
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

import React, { useState } from "react";
import "../css/EditorView.css";
import { useNavigate } from "react-router-dom";

function EditorView() {
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);
  const [activePageIndex, setActivePageIndex] = useState(0);

  const handleHomeBtn = () => navigate("/");

  const handleAddPage = () => {
    const newPage = { id: `Page-${pages.length + 1}`, text: "" };
    setPages([...pages, newPage]);
    setActivePageIndex(pages.length);
  };

  const handleTextChange = (value) => {
    const updated = [...pages];
    updated[activePageIndex].text = value;
    setPages(updated);
  };

  const handleDragStart = (index) => (e) => {
    e.dataTransfer.setData("dragIndex", index);
  };

  const handleDrop = (index) => (e) => {
    const dragIndex = Number(e.dataTransfer.getData("dragIndex"));
    if (dragIndex === index) return;
    const newPages = [...pages];
    const [dragged] = newPages.splice(dragIndex, 1);
    newPages.splice(index, 0, dragged);
    const reindexed = newPages.map((p, i) => ({ ...p, id: `Page-${i + 1}` }));
    setPages(reindexed);
    setActivePageIndex(reindexed.indexOf(dragged));
  };

  const handleDragOver = (e) => e.preventDefault();

  const activePage = pages[activePageIndex];

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-btn-small-container">
          <button
            className="sidebar-btn-small btn-hover"
            onClick={handleHomeBtn}
          >
            Home
          </button>
          <button className="sidebar-btn-small btn-hover">Minimize</button>
        </div>
        <button className="sidebar-btn btn-hover" onClick={handleAddPage}>
          + New Page
        </button>
        <div className="divider"></div>
        <div className="sidebar-page-list">
          {pages.map((page, index) => (
            <div
              key={page.id}
              draggable
              onDragStart={handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={handleDrop(index)}
              className={`sidebar-page-item ${
                index === activePageIndex ? "active" : ""
              }`}
              onClick={() => setActivePageIndex(index)}
            >
              {page.id}
            </div>
          ))}
        </div>
      </div>
      <div className="main">
        <textarea
          className="editor-text-area"
          value={activePage?.text || ""}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder={`Start typing in ${activePage?.id || "New Page"}...`}
        ></textarea>
      </div>
    </div>
  );
}

export default EditorView;

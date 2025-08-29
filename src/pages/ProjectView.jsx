import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/ProjectView.css";
import useCreateChapter from "../hooks/useCreateChapter";

function ProjectView() {
  const { id } = useParams();
  const [chapters] = useState(["Chapter 1", "Chapter 2", "Chapter 3"]);
  const [selectedProject, setSelectedProject] = useState(null);

  const navigation = useNavigate();

  const { createChapter } = useCreateChapter();

  const handleDoubleClick = (project) => {
    // console.log("Double clicked:", project);
    navigation("/editor");
  };

  const handleCreateChapter = () => {
    // To add shits
  };

  return (
    <div className="project-app">
      <div className="project-sidebar">
        <h3>Chapters</h3>
        {chapters.map((project, index) => (
          <button
            key={index}
            className={`project-sidebar-btn btn-hover ${
              selectedProject === project ? "selected" : ""
            }`}
            onClick={() => setSelectedProject(project)}
            onDoubleClick={() => handleDoubleClick(project)}
          >
            {project}
          </button>
        ))}
      </div>

      <div className="project-main">
        <div className="top-pane">Top daw</div>
        <div className="bottom-pane">
          <button onClick={() => {}} className="chapter-create-button">
            Create new chapter
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectView;

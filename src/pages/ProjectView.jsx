import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/ProjectView.css";

function ProjectView() {
  const { id } = useParams();
  const [projects] = useState(["Project A", "Project B", "Project C"]);
  const [selectedProject, setSelectedProject] = useState(null);

  const navigation = useNavigate();

  const handleDoubleClick = (project) => {
    // console.log("Double clicked:", project);
    navigation("/editor");
  };

  return (
    <div className="project-app">
      <div className="project-sidebar">
        <h3>Projects</h3>
        {projects.map((project, index) => (
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
        <div className="bottom-pane">Bottom daw</div>
      </div>
    </div>
  );
}

export default ProjectView;

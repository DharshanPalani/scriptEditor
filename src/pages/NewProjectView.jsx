import { useNavigate } from "react-router-dom";
import "../css/NewProjectView.css";
import { useState } from "react";
import useCreateProject from "../hooks/useCreateProject";

function NewProjectView() {
  const navigate = useNavigate();
  const { createProject } = useCreateProject();
  const [projectName, setProjectName] = useState("");

  const handleCreateProject = async () => {
    if (!projectName.trim()) {
      alert("Please enter a project name");
      return;
    }

    try {
      const folderPath = await createProject(projectName);
      alert(folderPath);

      navigate("/project/1");
    } catch (err) {
      alert("Failed to create project.");
    }
  };

  return (
    <div className="new-project-container">
      <div className="new-project-box">
        <input
          type="text"
          placeholder="Enter project title fam"
          className="new-project-input"
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button className="new-project-btn" onClick={handleCreateProject}>
          Create New Project
        </button>
      </div>
    </div>
  );
}

export default NewProjectView;

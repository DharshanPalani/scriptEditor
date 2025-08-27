import { useNavigate } from "react-router-dom";
import "../css/NewProjectView.css";

function NewProjectView() {
  const navigate = useNavigate();
  return (
    <div className="new-project-container">
      <div className="new-project-box">
        <input
          type="text"
          placeholder="Enter project title fam"
          className="new-project-input"
        />
        <button
          className="new-project-btn"
          onClick={() => navigate("/project/1")}
        >
          Create New Project
        </button>
      </div>
    </div>
  );
}

export default NewProjectView;

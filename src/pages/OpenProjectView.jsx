import React, { useEffect, useState } from "react";
import useFetchExistingProjects from "../hooks/useFetchExistingProjects";
import "../css/OpenProjectView.css";
import { useNavigate } from "react-router-dom";

function OpenProjectView() {
  const [projectDatas, setProjectDatas] = useState([]);
  const { fetchExistingProjects } = useFetchExistingProjects();

  const navigate = useNavigate();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const result = await fetchExistingProjects();
        setProjectDatas(result);
        console.log("From menu rendering:", result);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    loadProjects();
  }, [fetchExistingProjects]);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        {projectDatas.map((project, index) => (
          <div
            key={index}
            className="project-item"
            onClick={() => navigate("/project/" + project.id)}
          >
            {project.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpenProjectView;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/ProjectView.css";
import useCreateChapter from "../hooks/useCreateChapter";
import useFetchProjectData from "../hooks/useFetchProjectData";

function ProjectView() {
  const { id } = useParams();
  const [chapters] = useState(["Chapter 1", "Chapter 2", "Chapter 3"]);
  const [selectedProject, setSelectedProject] = useState(null);

  const [data, setData] = useState();

  const { fetchProjectData } = useFetchProjectData();

  const navigation = useNavigate();

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const result = await fetchProjectData(Number(id));
        if (isMounted) {
          // console.log("Type of result:", typeof result);
          // console.log("Result value:", result);
          setData(result);
        }
      } catch (error) {
        console.error("Failed to fetch project data:", error);
      }
    }

    if (id) {
      loadData();
    }

    return () => {
      isMounted = false;
    };
  }, [id, fetchProjectData]);

  const { createChapter } = useCreateChapter();

  const handleDoubleClick = (project) => {
    // console.log("Double clicked:", project);
    navigation("/editor");
  };

  const handleCreateChapter = () => {
    // To add shits
  };

  if (!data) {
    return <h1>Loading...</h1>;
  }

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
        <div className="top-pane">
          <h1>{data.name}</h1>
        </div>
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

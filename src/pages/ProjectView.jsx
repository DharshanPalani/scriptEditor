import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/ProjectView.css";
import useCreateChapter from "../hooks/useCreateChapter";
import useFetchProjectData from "../hooks/useFetchProjectData";

function ProjectView() {
  const { id } = useParams();
  const [lastIndex, setLastIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [data, setData] = useState();

  const { fetchProjectData } = useFetchProjectData();
  const { createChapter } = useCreateChapter();
  const navigation = useNavigate();

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const result = await fetchProjectData(Number(id));
        if (isMounted) {
          setData(result);
          setLastIndex(result.lastChapterIndex || 0);
        }
      } catch (error) {
        console.error("Failed to fetch project data:", error);
      }
    }

    if (id) loadData();

    return () => {
      isMounted = false;
    };
  }, [id, fetchProjectData]);

  const handleDoubleClick = (chapter) => {
    navigation("/editor", { state: { chapter } });
  };

  const handleCreateChapter = async () => {
    await createChapter(id);
    setLastIndex((prev) => prev + 1);
  };

  if (!data) return <h1>Loading daw wait</h1>;

  const chapters = Array.from(
    { length: lastIndex },
    (_, i) => `Chapter_${i + 1}`
  );

  return (
    <div className="project-app">
      <div className="project-sidebar">
        <h3>Chapters</h3>
        {chapters.length > 0 ? (
          chapters.map((chapter, index) => (
            <button
              key={index}
              className={`project-sidebar-btn btn-hover ${
                selectedProject === chapter ? "selected" : ""
              }`}
              onClick={() => setSelectedProject(chapter)}
              onDoubleClick={() => handleDoubleClick(chapter)}
            >
              {chapter}
            </button>
          ))
        ) : (
          <p>No chapters yet</p>
        )}
      </div>

      <div className="project-main">
        <div className="top-pane">
          <h1>{data.name}</h1>
        </div>
        <div className="bottom-pane">
          <button
            onClick={handleCreateChapter}
            className="chapter-create-button"
          >
            Create new chapter
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectView;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectView() {
  const { id } = useParams();

  const [text, setText] = useState("");

  useEffect(() => {
    if (id === "1234") {
      setText("Existing project");
    } else {
      setText("This project ain't there");
    }
  }, []);

  return (
    <>
      <div style={{ color: "red" }}>{id} Daw</div>
      <h1 style={{ color: "red" }}>{text}</h1>
    </>
  );
}

export default ProjectView;

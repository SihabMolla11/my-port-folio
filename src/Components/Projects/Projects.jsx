import { useEffect, useState } from "react";
import Project from "./Project";
import Modal from "./ProjectDetail/Modal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [uniqueId, setUniqueId] = useState(null);
  //   console.log(uniqueId);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="my-container">
      <h2 className="text-4xl text-center font-bold text-white mt-20">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {projects.map((project) => (
          <Project
            project={project}
            key={project.id}
            setUniqueId={setUniqueId}
          />
        ))}
      </div>
      <Modal uniqueId={uniqueId} />
    </div>
  );
};

export default Projects;

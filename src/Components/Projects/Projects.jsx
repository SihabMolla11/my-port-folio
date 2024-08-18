import { useState } from "react";
import { projectData } from "../../data/projectData";
import Project from "./Project";
import ProjectCart from "./ProjectCart";
import Modal from "./ProjectDetail/Modal";

const Projects = () => {
  const [uniqueId, setUniqueId] = useState(null);

  return (
    <div data-aos="fade-down" className="my-container mt-20">
      <h2 className="text-4xl text-center font-bold text-white  uppercase">
        PROJECTS
      </h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        {projectData?.map((project) => (
          <Project
            project={project}
            key={project.id}
            setUniqueId={setUniqueId}
          />
        ))}
      </div> */}
      <div className="space-y-6 mt-8">
        {projectData?.map((data) => (
          <ProjectCart key={data?.id} data={data} />
        ))}
      </div>
      <Modal uniqueId={uniqueId} />
    </div>
  );
};

export default Projects;

import { useState } from "react";

const ProjectDropdown = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState("");

  const handleChange = (e) => {
    const projectId = e.target.value;
    setSelectedProject(projectId);

    // Scroll to the selected project
    const element = document.getElementById(`project-${projectId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="other-services-holder">
      <div className="other-services-dropdown">
        <label htmlFor="project-select">Jump to Project:</label>
        <select
          id="project-select"
          value={selectedProject}
          onChange={handleChange}
        >
          <option value="">Select a project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProjectDropdown;

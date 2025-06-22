import { useState } from "react";
import { ProjectCard } from "../../components/projectCard";
import { projects, TProjects } from "../../database/projects";
import styles from "./projects.module.css";
import { Modal } from "../../components/modal";

export function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectProject] = useState<TProjects | null>(null);

  const handleModalOpen = (project: TProjects, value: boolean) => {
    setSelectProject(project);
    setOpenModal(value);
  };

  return (
    <div className={styles.projects__container}>
      <Modal openModal={openModal} setOpenModal={setOpenModal} project={selectedProject} />

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} handleModalOpen={handleModalOpen} />
      ))}
    </div>
  );
}

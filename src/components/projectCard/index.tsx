import { useContext } from "react";
import { TProjects } from "../../database/projects";
import styles from "./projectCard.module.css";
import { portifolioContext } from "../../providers/portifolioContext";

interface projectCardProps {
  project: TProjects;
  handleModalOpen: (project: TProjects, value: boolean) => void;
}

export function ProjectCard({ project, handleModalOpen }: projectCardProps) {
  const { text } = useContext(portifolioContext);

  const openModal = (project: TProjects) => {
    console.log(project);
    handleModalOpen(project, true);
  };
  return (
    <div className={styles.project__container}>
      <h2>{project.title}</h2>
      <img src={project.img} alt="" />
      <p>{project.description}</p>
      <button onClick={() => openModal(project)} className={styles.card__button}>
        {text.readMore}
      </button>
    </div>
  );
}

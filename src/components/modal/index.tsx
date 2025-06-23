import { Dialog } from "radix-ui";
import { TProjects } from "../../database/projects";
import styles from "./modal.module.css";
import { Tech } from "../tech";
import { useContext } from "react";
import { portifolioContext } from "../../providers/portifolioContext";

interface modalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  project: TProjects | null;
}

export function Modal({ openModal, setOpenModal, project }: modalProps) {
  const { text } = useContext(portifolioContext);

  return (
    <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.modal__container}>
          <Dialog.Title>{project?.title}</Dialog.Title>
          <img src={project?.img} className={styles.modal__image} />
          <p>{project?.description}</p>
          <ul className={styles.tech__list}>
            {project?.technologies.map((tech, index) => (
              <Tech key={index} tech={tech} />
            ))}
          </ul>
          <div className={styles.link__container}>
            <strong>{text.deploy}:</strong>
            <a href={project?.deploy} target="_blank">
              {project?.deploy}
            </a>
          </div>
          <div className={styles.link__container}>
            <strong>{text.gitHub}:</strong>
            <a href={project?.gitHub} target="_blank">
              {project?.gitHub}
            </a>
          </div>

          <Dialog.Close className={styles.close__button}>X</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

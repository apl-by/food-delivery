import styles from "./modal-overlay.module.scss";
import classNames from "classnames/bind";
import { ReactNode, SyntheticEvent } from "react";

let cx = classNames.bind(styles);

type ModalOverlayProps = {
  onClick: (e: SyntheticEvent) => void;
  children: ReactNode;
};

const ModalOverlay = ({ children, onClick }: ModalOverlayProps) => {
  return (
    <div className={styles.overlay} onClick={onClick}>
      {children}
    </div>
  );
};

export default ModalOverlay;

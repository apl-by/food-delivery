import styles from "./modal-alert.module.scss";
import classNames from "classnames/bind";
import CloseIcon from "../../../public/icons/close-icon.svg";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useAppState } from "@/hooks/use-app-state";
import { DELETE_MODAL_INFO } from "@/services/actions/actions";
import { ModalAlertTypes } from "@/services/types";

let cx = classNames.bind(styles);

type ModalAlertProps = {
  onClose?: () => void;
  title: string;
  message: string;
  type: ModalAlertTypes;
};

const ModalAlert = ({ onClose, title, message, type }: ModalAlertProps) => {
  const { dispatch } = useAppState();

  const handleClose = () => {
    onClose?.() ? void 0 : dispatch({ type: DELETE_MODAL_INFO });
  };

  const cnTitle = cx("title", type === "error" ? "title-error" : "");
  return (
    <ModalOverlay
      onClick={(e) => e.target !== e.currentTarget || handleClose()}
    >
      <div className={styles.modal}>
        <div className={styles["close-btn"]} onClick={handleClose}>
          <CloseIcon />
        </div>
        <h2 className={cnTitle}>{title}</h2>
        <p className={styles.text}>{message}</p>
      </div>
    </ModalOverlay>
  );
};

export default ModalAlert;

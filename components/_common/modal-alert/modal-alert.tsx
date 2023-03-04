import styles from "./modal-alert.module.scss";
import classNames from "classnames/bind";
import CloseIcon from "../../../public/icons/close-icon.svg";
import ModalOverlay from "../modal-overlay/modal-overlay";

let cx = classNames.bind(styles);

type ModalAlertProps = {
  onClose: () => void;
};

const ModalAlert = ({ onClose }: ModalAlertProps) => {
  return (
    <ModalOverlay onClick={(e) => e.target !== e.currentTarget || onClose()}>
      <div className={styles.modal}>
        <div className={styles["close-btn"]} onClick={onClose}>
          <CloseIcon />
        </div>
        <h2 className={styles.title}>{"Notification"}</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          tempore id illo nam, nisi officia commodi assumenda corrupti non
          iusto, laudantium ipsum totam aperiam unde soluta molestiae. Hic,
          minus repellat?
        </p>
      </div>
    </ModalOverlay>
  );
};

export default ModalAlert;

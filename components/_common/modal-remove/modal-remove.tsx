import styles from "./modal-remove.module.scss";
import classNames from "classnames/bind";
import CloseIcon from "../../../public/icons/close-icon.svg";
import ModalOverlay from "../modal-overlay/modal-overlay";
import Button from "../button/button";
import { useState } from "react";
import Form from "../form/form";
import TextInput from "../text-input/text-input";

let cx = classNames.bind(styles);

type ModalRemoveProps = {
  onClose: () => void;
  onSubmit: (formData: RemoveInputValues) => void;
};

export type RemoveInputValues = {
  email: string;
};

const ModalRemove = ({ onClose, onSubmit }: ModalRemoveProps) => {
  const [inputValues, setInputValues] = useState<RemoveInputValues>({
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValues);
    onClose();
  };

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const a = "asdfdfasdf";
  return (
    <ModalOverlay onClick={(e) => e.target !== e.currentTarget || onClose()}>
      <div className={styles.modal}>
        <div className={styles["close-btn"]} onClick={onClose}>
          <CloseIcon />
        </div>
        <h2 className={styles.title}>{"Confirm account removing"}</h2>
        <p className={styles.text}>
          {`This action cannot be undone. This will permanently delete your account. If you are absolutely sure, please type `}
          <span className={styles["text-span"]}>{a}</span>
          {` to confirm`}
        </p>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <TextInput
            name="email"
            value={inputValues.email}
            onChange={handleInputs}
            pattern={a}
            mix={styles.input}
          />
          <Button
            type={"submit"}
            variant={"warning"}
            mix={styles.submit}
            onClick={() => void 0}
          >
            {"Remove"}
          </Button>
        </Form>
      </div>
    </ModalOverlay>
  );
};

export default ModalRemove;

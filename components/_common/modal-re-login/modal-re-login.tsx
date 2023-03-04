import styles from "./modal-re-login.module.scss";
import classNames from "classnames/bind";
import CloseIcon from "../../../public/icons/close-icon.svg";
import ModalOverlay from "../modal-overlay/modal-overlay";
import EmailInput from "../email-input/email-input";
import PasswordInput from "../password-input/password-input";
import Button from "../button/button";
import { useState } from "react";
import Form from "../form/form";

let cx = classNames.bind(styles);

type ModalReLoginProps = {
  onClose: () => void;
  onSubmit: (formData: ReLoginInputValues) => void;
};

export type ReLoginInputValues = {
  email: string;
  password: string;
};

const ModalReLogin = ({ onClose, onSubmit }: ModalReLoginProps) => {
  const [inputValues, setInputValues] = useState<ReLoginInputValues>({
    email: "",
    password: "",
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

  return (
    <ModalOverlay onClick={(e) => e.target !== e.currentTarget || onClose()}>
      <div className={styles.modal}>
        <div className={styles["close-btn"]} onClick={onClose}>
          <CloseIcon />
        </div>
        <h2 className={styles.title}>
          {"Enter your previous email and password"}
        </h2>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <EmailInput
            name="email"
            value={inputValues.email}
            placeholder={"name@example.com"}
            label={"Email"}
            onChange={handleInputs}
            mix={styles.input}
          />
          <PasswordInput
            name="password"
            value={inputValues.password}
            placeholder={"min. 5 characters"}
            label={"Password"}
            onChange={handleInputs}
            mix={styles.input}
          />
          <Button
            type={"submit"}
            variant={"filled"}
            mix={styles.submit}
            onClick={() => void 0}
          >
            {"Login"}
          </Button>
        </Form>
      </div>
    </ModalOverlay>
  );
};

export default ModalReLogin;

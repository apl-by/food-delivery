import styles from "./modal-re-sign-in.module.scss";
import classNames from "classnames/bind";
import CloseIcon from "../../../public/icons/close-icon.svg";
import ModalOverlay from "../modal-overlay/modal-overlay";
import EmailInput from "../email-input/email-input";
import PasswordInput from "../password-input/password-input";
import Button from "../button/button";
import { useState } from "react";
import Form from "../form/form";
import { useAppState } from "@/hooks/use-app-state";
import { ADD_MODAL_INFO, DELETE_MODAL_INFO } from "@/services/actions/actions";
import { ModalPromptForInvoke } from "@/services/types";
import { useAuth } from "@/hooks/use-auth";

let cx = classNames.bind(styles);

type ModalReSignInProps = {
  onClose?: () => void;
  data: ModalPromptForInvoke;
};

export type ReSignInInputValues = {
  email: string;
  password: string;
};

const ModalReSignIn = ({ onClose, data }: ModalReSignInProps) => {
  const [inputValues, setInputValues] = useState<ReSignInInputValues>({
    email: "",
    password: "",
  });
  const { reSignIn, updEmailWithData, removeUser } = useAuth();
  const { dispatch } = useAppState();

  const handleClose = () => {
    onClose?.() ? void 0 : dispatch({ type: DELETE_MODAL_INFO });
  };

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // re sign in with old email and password
    reSignIn(inputValues.email, inputValues.password)
      .then(() => {
        // if re-sign-in is needed from the updEmailWithData action
        // then repeat the updEmailWithData action
        if (data.actionName === "updEmailWithData" && data.data) {
          return updEmailWithData(data.data).catch((error) => {
            dispatch({
              type: ADD_MODAL_INFO,
              payload: { modalType: "error", info: error },
            });
          });
        }

        // if re-sign-in is needed from the removeUser action
        // then repeat the removeUser action
        if (data.actionName === "removeUser" && data.data) {
          return removeUser().catch((error) => {
            dispatch({
              type: ADD_MODAL_INFO,
              payload: { modalType: "error", info: error },
            });
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_MODAL_INFO,
          payload: { modalType: "error", info: error },
        });
      })
      .finally(() => handleClose());
  };

  return (
    <ModalOverlay
      onClick={(e) => e.target !== e.currentTarget || handleClose()}
    >
      <div className={styles.modal}>
        <div className={styles["close-btn"]} onClick={handleClose}>
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
            {"Sign in"}
          </Button>
        </Form>
      </div>
    </ModalOverlay>
  );
};

export default ModalReSignIn;

import styles from "./modal-remove.module.scss";
import classNames from "classnames/bind";
import CloseIcon from "../../../public/icons/close-icon.svg";
import ModalOverlay from "../modal-overlay/modal-overlay";
import Button from "../button/button";
import { useState } from "react";
import Form from "../form/form";
import TextInput from "../text-input/text-input";
import { useAppState } from "@/hooks/use-app-state";
import { ADD_MODAL_INFO, DELETE_MODAL_INFO } from "@/services/actions/actions";
import { ModalPromptForInvoke } from "@/services/types";
import { useAuth } from "@/hooks/use-auth";

let cx = classNames.bind(styles);

type ModalRemoveProps = {
  data: ModalPromptForInvoke;
  onClose?: () => void;
};

export type RemoveInputValues = {
  email: string;
};

const ModalRemove = ({ onClose, data }: ModalRemoveProps) => {
  const [inputValues, setInputValues] = useState<RemoveInputValues>({
    email: "",
  });
  const { removeUser } = useAuth();
  const { dispatch } = useAppState();

  const handleClose = () => {
    onClose?.() ? void 0 : dispatch({ type: DELETE_MODAL_INFO });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.actionName === "removeUser" && data.email) {
      if (data.email !== inputValues.email) return;
      return removeUser()
        .catch((error) => {
          if (error.message === "Needs reSignIn") {
            return dispatch({
              type: ADD_MODAL_INFO,
              payload: { modalType: "reSignIn", forInvoke: data },
            });
          }
          return dispatch({
            type: ADD_MODAL_INFO,
            payload: { modalType: "error", info: error },
          });
        })
        .finally(() => handleClose());
    }
  };

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ModalOverlay
      onClick={(e) => e.target !== e.currentTarget || handleClose()}
    >
      <div className={styles.modal}>
        <div className={styles["close-btn"]} onClick={handleClose}>
          <CloseIcon />
        </div>
        <h2 className={styles.title}>{"Confirm account removing"}</h2>
        <p className={styles.text}>
          {`This action cannot be undone. This will permanently delete your account. If you are absolutely sure, please type `}
          <span className={styles["text-span"]}>{data.email}</span>
          {` to confirm`}
        </p>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <TextInput
            name="email"
            value={inputValues.email}
            onChange={handleInputs}
            pattern={data.email}
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

import Link from "next/link";
import { useState } from "react";
import Button from "../button/button";
import EmailInput from "../email-input/email-input";
import Form from "../form/form";
import styles from "./recover-form.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type RecoverFormProps = {
  onSubmit: (formData: RecoverInputValues) => void;
  mix?: string;
};

export type RecoverInputValues = { email: string };

const RecoverForm = ({ mix, onSubmit }: RecoverFormProps) => {
  const [inputValues, setInputValues] = useState<RecoverInputValues>({
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValues);
  };

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const cnForm = cx("form", mix);
  const cnDescription = cx("description", "text");
  const cnInput = cx("input");
  const cnQuestion = cx("question", "text");
  return (
    <Form className={cnForm} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Recover</h1>
      <p className={cnDescription}>
        {
          "Enter the email address you used when registering to recover access to your account"
        }
      </p>
      <EmailInput
        name="email"
        value={inputValues.email}
        placeholder={"name@example.com"}
        label={"Email"}
        onChange={handleInputs}
        mix={cnInput}
      />
      <Button
        type={"submit"}
        variant={"filled"}
        mix={styles.button}
        onClick={() => void 0}
      >
        {"Recover"}
      </Button>
      <p className={cnQuestion}>
        {"Go back to the login page?"}
        <Link href={"/login"} className={styles.link}>
          {" Go back"}
        </Link>
      </p>
    </Form>
  );
};

export default RecoverForm;

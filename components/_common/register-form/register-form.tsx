import Link from "next/link";
import { useState } from "react";
import Button from "../button/button";
import EmailInput from "../email-input/email-input";
import Form from "../form/form";
import PasswordInput from "../password-input/password-input";
import styles from "./register-form.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type RegisterFormProps = {
  onSubmit: (formData: RegisterInputValues) => void;
  mix?: string;
};

export type RegisterInputValues = { email: string; password: string };

const RegisterForm = ({ mix, onSubmit }: RegisterFormProps) => {
  const [inputValues, setInputValues] = useState<RegisterInputValues>({
    email: "",
    password: "",
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
      <h1 className={styles.title}>Register</h1>
      <p className={cnDescription}>
        {"Register a new account by entering your email address and password"}
      </p>
      <EmailInput
        name="email"
        value={inputValues.email}
        placeholder={"name@example.com"}
        label={"Email"}
        onChange={handleInputs}
        mix={cnInput}
      />
      <PasswordInput
        name="password"
        value={inputValues.password}
        placeholder={"min. 6 characters"}
        label={"Password"}
        onChange={handleInputs}
        mix={cnInput}
      />
      <Button
        type={"submit"}
        variant={"filled"}
        mix={styles.button}
        onClick={() => void 0}
      >
        {"Register"}
      </Button>
      <p className={cnQuestion}>
        {"Already have an account?"}
        <Link href={"/login"} className={styles.link}>
          {" Sign in"}
        </Link>
      </p>
    </Form>
  );
};

export default RegisterForm;

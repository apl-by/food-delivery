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
  mix?: string;
};

const RegisterForm = ({ mix }: RegisterFormProps) => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const cnForm = cx("form", mix);
  const cnDescription = cx("description", "text");
  const cnInput = cx("input");
  const cnQuestion = cx("question", "text");
  return (
    <Form className={cnForm}>
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
        placeholder={"min. 5 characters"}
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

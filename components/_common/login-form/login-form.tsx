import Link from "next/link";
import { useState } from "react";
import Button from "../button/button";
import Checkbox from "../checkbox/checkbox";
import EmailInput from "../email-input/email-input";
import Form from "../form/form";
import PasswordInput from "../password-input/password-input";
import styles from "./login-form.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type LoginFormProps = {
  mix?: string;
};

const LoginForm = ({ mix }: LoginFormProps) => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setInputValues((prev) => ({ ...prev, [name]: inputValue }));
  };

  const cnLoginForm = cx("login-form", mix);
  const cnDescription = cx("description", "text");
  const cnInput = cx("input");
  const cnRecovering = cx("recovering", "link");
  const cnQuestion = cx("question", "text");

  return (
    <Form className={cnLoginForm}>
      <h1 className={styles.title}>Login</h1>
      <p className={cnDescription}>
        {" Sign in with your data that you entered during your registration."}
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
      <Checkbox
        name="checkbox"
        label={"Keep me logged in"}
        checked={inputValues.checkbox}
        onChange={handleInputs}
      />
      <Button
        type={"submit"}
        variant={"filled"}
        mix={styles.button}
        onClick={() => void 0}
      >
        {"Login"}
      </Button>
      <Link href={"/recover"} className={cnRecovering}>
        {"Forgot password"}
      </Link>
      <p className={cnQuestion}>
        {"Don’t have an account?"}
        <Link href={"/register"} className={styles.link}>
          {" Sign up"}
        </Link>
      </p>
      <Link href={"/"} className={styles.link}>
        {"I want to log in without authentication"}
      </Link>
    </Form>
  );
};

export default LoginForm;

import { ReactNode } from "react";
import styles from "./form.module.scss";

type FormProps = {
  children: ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

const Form = ({ children, ...props }: FormProps) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
};

export default Form;

import { ReactNode } from "react";
import styles from "./form.module.scss";

type FormProps = { children: ReactNode };

const Form = ({ children }: FormProps) => {
  return <form className={styles.form}></form>;
};

export default Form;

import { ReactNode } from "react";
import styles from "./form.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type FormProps = {
  children: ReactNode;
  className?: string;
  mix?: string;
} & React.FormHTMLAttributes<HTMLFormElement>;

const Form = ({ children, className, mix, ...props }: FormProps) => {
  const cnForm = cx("form", className, mix);

  return (
    <form className={cnForm} {...props}>
      {children}
    </form>
  );
};

export default Form;

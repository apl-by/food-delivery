import { forwardRef, ReactNode } from "react";
import styles from "./form.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type FormProps = {
  children: ReactNode;
  className?: string;
  mix?: string;
} & React.FormHTMLAttributes<HTMLFormElement>;

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, className, mix, ...props }, ref) => {
    const cnForm = cx("form", className, mix);

    return (
      <form className={cnForm} {...props} ref={ref}>
        {children}
      </form>
    );
  }
);

Form.displayName = "Form";

export default Form;

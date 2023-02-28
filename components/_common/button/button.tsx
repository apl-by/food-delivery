import styles from "./button.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";

let cx = classNames.bind(styles);

type CheckboxProps = {
  disabled?: boolean;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "warning" | "filled" | "disabled";
  mod?: "meal-card" | "review-card";
  mix?: string;
  onClick: (e: React.SyntheticEvent) => void;
};

const Button = ({
  type,
  children,
  variant,
  onClick,
  mod,
  mix,
  disabled,
}: CheckboxProps) => {
  const handleClick = (e: React.SyntheticEvent) => {
    onClick(e);
  };

  const cnButton = cx(
    "button",
    { [`button-${variant}`]: variant, [`button-mod-${mod}`]: mod },
    mix
  );

  return (
    <button
      type={type || "button"}
      className={cnButton}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

import { useId, useState } from "react";
import styles from "./password-input.module.scss";
import EyeIconOn from "../../../public/icons/eye-on.svg";
import EyeIconOff from "../../../public/icons/eye-off.svg";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type PasswordInputProps = {
  value: string;
  name: string;
  placeholder?: string;
  label?: string;
  mix?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordInput = ({
  value,
  name,
  placeholder,
  label,
  mix,
  onChange,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const cnWrapper = cx("wrapper", mix);
  const cnInput = cx("input");
  const cnLabel = cx("label");
  return (
    <div className={cnWrapper}>
      {label && (
        <label className={cnLabel} htmlFor={`${id}-${name}`}>
          {label}
        </label>
      )}
      <div className={styles["input-wrapper"]}>
        <input
          id={`${id}-${name}`}
          type={showPassword ? "text" : "password"}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          className={cnInput}
          minLength={5}
          maxLength={40}
          required
        />
        {showPassword && <EyeIconOn onClick={() => setShowPassword(false)} />}
        {!showPassword && <EyeIconOff onClick={() => setShowPassword(true)} />}
      </div>
    </div>
  );
};

export default PasswordInput;

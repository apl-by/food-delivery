import { useId } from "react";
import styles from "./email-input.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type EmailInputProps = {
  readOnly?: boolean;
  value: string;
  name: string;
  placeholder?: string;
  label?: string;
  mix?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const EmailInput = ({
  value,
  name,
  placeholder,
  label,
  mix,
  onChange,
  readOnly,
}: EmailInputProps) => {
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
      <input
        id={`${id}-${name}`}
        type={"email"}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className={cnInput}
        required
        maxLength={100}
        readOnly={readOnly}
      />
    </div>
  );
};

export default EmailInput;

import { useId } from "react";
import styles from "./text-input.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type TextInputProps = {
  value: string;
  name: string;
  readOnly?: boolean;
  placeholder?: string;
  pattern?: string;
  label?: string;
  mix?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  value,
  name,
  placeholder,
  pattern,
  label,
  mix,
  onChange,
  readOnly,
}: TextInputProps) => {
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
        type={"text"}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className={cnInput}
        required
        maxLength={100}
        readOnly={readOnly}
        pattern={pattern}
      />
    </div>
  );
};

export default TextInput;

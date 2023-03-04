import { useId } from "react";
import styles from "./tel-input.module.scss";
import classNames from "classnames/bind";
import PhoneInput from "react-phone-number-input/input";

let cx = classNames.bind(styles);

type TelInputProps = {
  readOnly?: boolean;
  value: string;
  name: string;
  placeholder?: string;
  label?: string;
  mix?: string;
  onChange: (val: string | undefined) => void;
};

const TelInput = ({
  value,
  name,
  placeholder,
  label,
  mix,
  onChange,
  readOnly,
}: TelInputProps) => {
  const id = useId();

  const handleChange = (val: string | undefined) => {
    onChange(val);
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
      <PhoneInput
        value={value}
        onChange={handleChange}
        smartCaret={true}
        id={`${id}-${name}`}
        name={name}
        placeholder={placeholder}
        className={cnInput}
        minLength={9}
        maxLength={18}
        readOnly={readOnly}
      />
    </div>
  );
};

export default TelInput;

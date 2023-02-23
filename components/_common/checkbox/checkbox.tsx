import { useId } from "react";
import styles from "./checkbox.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type CheckboxProps = {
  checked: boolean;
  name: string;
  label: string;
  mix?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ checked, name, label, mix, onChange }: CheckboxProps) => {
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const cnLabel = cx("label", mix);
  return (
    <label className={cnLabel} htmlFor={`${id}-${name}`}>
      {label}

      <input
        id={`${id}-${name}`}
        type={"checkbox"}
        checked={checked}
        name={name}
        onChange={handleChange}
        className={styles.input}
      />
    </label>
  );
};

export default Checkbox;

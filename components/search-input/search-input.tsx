import { useId } from "react";
import styles from "./search-input.module.scss";
import SearchIcon from "../../public/icons/search-icon.svg";

type SearchInputProps = {
  type: string;
  value: string;
  name: string;
  placeholder: string;
  setValue: (value: string) => void;
};

const SearchInput = ({
  type,
  value,
  name,
  placeholder,
  setValue,
}: SearchInputProps) => {
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <label className={styles.label} htmlFor={`${id}-${name}`}>
      <input
        id={`${id}-${name}`}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className={styles.input}
      />
      <button type={"submit"} className={styles.button}>
        <SearchIcon />
      </button>
    </label>
  );
};

export default SearchInput;

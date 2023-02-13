import styles from "./header.module.scss";
import Logo from "../logo/logo";
import Form from "../form/form";
import SearchInput from "../search-input/search-input";
import { useState } from "react";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(123);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <Form noValidate onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="search"
          value={searchValue}
          placeholder="Search"
          setValue={setSearchValue}
        />
      </Form>
    </header>
  );
};

export default Header;

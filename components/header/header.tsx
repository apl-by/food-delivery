import styles from "./header.module.scss";
import Logo from "../logo/logo";
import Form from "../form/form";
import SearchInput from "../search-input/search-input";
import { useState } from "react";
import NavBar from "../nav-bar/nav-bar";
import Image from "next/image";
import CartIcon from "../../public/cart-icon.svg";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(123);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <Form noValidate onSubmit={handleSubmit} mix={styles["mix-form"]}>
          <SearchInput
            type="text"
            name="search"
            value={searchValue}
            placeholder="Search"
            setValue={setSearchValue}
          />
        </Form>
      </div>
      <div className={styles.wrapper}>
        <NavBar />
        <div className={styles.cart} data-count={0}>
          <CartIcon />
        </div>
        <div className={styles.avatar}>
          {
            <Image
              src={"/avatar.png"}
              alt={"avatar"}
              width={50}
              height={50}
              priority={true}
              className={styles.img}
            ></Image>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;

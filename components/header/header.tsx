import styles from "./header.module.scss";
import Logo from "../logo/logo";
import Form from "../form/form";
import SearchInput from "../search-input/search-input";
import { useState } from "react";
import NavBar from "../nav-bar/nav-bar";
import Image from "next/image";
import CartIcon from "../../public/cart-icon.svg";
import Link from "next/link";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(123);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href={"/"}>
          <Logo />
        </Link>
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
        <Link className={styles.cart} data-count={0} href={"/cart"}>
          <CartIcon />
        </Link>
        <Link className={styles.avatar} href={"/account"}>
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
        </Link>
      </div>
    </header>
  );
};

export default Header;

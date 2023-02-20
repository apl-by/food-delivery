import styles from "./header.module.scss";
import Logo from "../logo/logo";
import Form from "../form/form";
import SearchInput from "../search-input/search-input";
import { useContext, useState } from "react";
import NavBar from "../nav-bar/nav-bar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CartIcon from "../cart-icon/cart-icon";
import { OrderContext } from "@/contexts/orderContext";
import { getQueryParams } from "@/utils/utils";

const queryName = "search";

const Header = () => {
  const { pathname, asPath, query, push } = useRouter();
  const [searchValue, setSearchValue] = useState(
    () => (getQueryParams(asPath, queryName) as string) ?? ""
  );
  const { totalCount } = useContext(OrderContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchParams = new URLSearchParams(asPath.replace(/\/\??/, ""));

    if (searchValue === query[queryName]) {
      return;
    }
    if (searchValue === "") {
      searchParams.delete(queryName);
      push(pathname + "?" + searchParams.toString());
      return;
    }
    searchParams.set(queryName, searchValue);
    push(pathname + "?" + searchParams.toString());
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href={"/"}>
          <Logo />
        </Link>
        {pathname === "/" && (
          <Form noValidate onSubmit={handleSubmit} mix={styles["mix-form"]}>
            <SearchInput
              type="text"
              name="search"
              value={searchValue}
              placeholder="Search"
              setValue={setSearchValue}
            />
          </Form>
        )}
      </div>
      <div className={styles.wrapper}>
        <NavBar />
        <Link className={styles.cart} data-count={totalCount} href={"/cart"}>
          <CartIcon mod={totalCount > 0 ? "active" : undefined} />
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

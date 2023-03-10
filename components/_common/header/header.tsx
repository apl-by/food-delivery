import styles from "./header.module.scss";
import Logo from "../logo/logo";
import Form from "../form/form";
import SearchInput from "../search-input/search-input";
import { useCallback, useState } from "react";
import NavBar from "../nav-bar/nav-bar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CartIcon from "../../_home-page/cart-icon/cart-icon";
import { getQueryParams } from "@/utils/utils";
import { exampleModUser, navItems } from "@/data/data";
import NavButtonIcon from "../../../public/icons/nav-btn.svg";
import classNames from "classnames/bind";
import { Portal } from "../portal/portal";
import Aside from "../aside/aside";
import { useAuth } from "@/hooks/use-auth";
import { asidePortalId } from "@/data/settings";
import { useAppState } from "@/hooks/use-app-state";

let cx = classNames.bind(styles);

const queryName = "search";

const Header = () => {
  const { pathname, asPath, query, push } = useRouter();
  const [openNavSideBar, setOpenNavSideBar] = useState(false);
  const [searchValue, setSearchValue] = useState(
    () => (getQueryParams(asPath, queryName) as string) ?? ""
  );

  const { user } = useAuth();
  const { state } = useAppState();
  const totalCount = state.order.totalCount;
  const sourceUserData = state.exampleMod ? exampleModUser : user;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

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

  const closeNavSideBar = useCallback(() => setOpenNavSideBar(false), []);

  if (!sourceUserData) return null;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href={"/"}>
            <Logo />
          </Link>
          {/* Form has "display: none" under (max-width: 768px) */}
          {pathname === "/" && (
            <Form noValidate onSubmit={handleSubmit} mix={styles["mix-form"]}>
              <SearchInput
                type="text"
                name="search"
                value={searchValue}
                placeholder="Search"
                onChange={handleSearch}
              />
            </Form>
          )}
        </div>
        <div className={styles.wrapper}>
          {/* NavBar has "display: none" under (max-width: 768px) */}
          <NavBar
            navData={navItems}
            currentPath={pathname}
            mix={styles["mix-navbar"]}
          />
          <Link
            className={cx("cart", { ["cart-active"]: pathname === "/cart" })}
            data-count={totalCount}
            href={"/cart"}
          >
            <CartIcon mod={totalCount > 0 ? "active" : undefined} />
          </Link>
          <Link
            className={cx("avatar", {
              ["avatar-active"]: pathname.startsWith("/account"),
            })}
            href={"/account"}
          >
            {
              <Image
                src={
                  sourceUserData.photoURL !== ""
                    ? sourceUserData.photoURL
                    : "/user-avatar.png"
                }
                alt={"avatar"}
                width={50}
                height={50}
                priority={true}
                className={styles.img}
              ></Image>
            }
          </Link>
          {/* "mobile-navbar" has "display: none" above (max-width: 768px) */}
          <div className={styles["mobile-navbar"]}>
            <div className={styles.divider}></div>
            <button
              type={"button"}
              className={styles["nav-button"]}
              onClick={() => setOpenNavSideBar(true)}
            >
              <NavButtonIcon />
            </button>
          </div>
        </div>
      </div>
      <Portal id={asidePortalId}>
        <Aside isOpen={openNavSideBar} onClose={closeNavSideBar}>
          <NavBar navData={navItems} currentPath={pathname} mod={"column"} />
        </Aside>
      </Portal>
    </header>
  );
};

export default Header;

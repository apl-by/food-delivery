import styles from "./aside.module.scss";
import CloseIcon from "../../../public/icons/close-icon.svg";
import classNames from "classnames/bind";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

let cx = classNames.bind(styles);

type AsideProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};

const Aside = ({ isOpen, children, onClose }: AsideProps) => {
  const { pathname } = useRouter();
  const [path, setPath] = useState(pathname);

  useEffect(() => {
    if (pathname === path) return;
    setPath(pathname);
    onClose();
  }, [pathname, path, onClose]);

  const cnContainer = cx("container", { ["container-opened"]: isOpen });
  const cnAside = cx("aside", { ["aside-opened"]: isOpen });

  return (
    <div
      className={cnContainer}
      onClick={(e) => e.target !== e.currentTarget || onClose()}
    >
      <aside className={cnAside}>
        <div className={styles.wrapper} onClick={onClose}>
          <CloseIcon />
        </div>
        {children}
      </aside>
    </div>
  );
};

export default Aside;

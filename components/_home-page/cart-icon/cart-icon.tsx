import CartIconSvg from "../../../public/icons/cart-icon.svg";
import styles from "./cart-icon.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

type CartIconProps = {
  mod?: "active";
  badgeContent?: number;
};

const CartIcon = ({ mod, badgeContent }: CartIconProps) => {
  const cnCart = cx("cart", { [`cart-with-badge`]: badgeContent });
  const cnIcon = cx("icon", { [`icon-${mod}`]: mod });

  return (
    <div className={cnCart} data-count={badgeContent}>
      <CartIconSvg className={cnIcon} />
    </div>
  );
};

export default CartIcon;

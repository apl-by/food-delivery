import Form from "@/components/_common/form/form";
import styles from "./account-form.module.scss";
import Image from "next/image";
import Button from "@/components/_common/button/button";
import TextInput from "@/components/_common/text-input/text-input";
import EmailInput from "@/components/_common/email-input/email-input";
import TelInput from "@/components/_common/tel-input/tel-input";
import Checkbox from "@/components/_common/checkbox/checkbox";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);
const cnForm = cx("form");
const AccountForm = () => {
  return (
    <Form className={cnForm}>
      <h2 className={styles.title}>{"Account"}</h2>
      <div className={styles.wrapper}>
        <h3 className={styles["subtitle-info"]}>{"Personal information"}</h3>
        <p className={styles.text}>{"Avatar"}</p>
        <div className={styles["upper-container"]}>
          <div className={styles["avatar-container"]}>
            <Image
              src={"/avatar-account.png"}
              alt={"avatar"}
              width={88}
              height={88}
              priority={true}
            />
          </div>
          <Button onClick={() => void 0} mix={styles["button-change"]}>
            {"Change"}
          </Button>
          <Button onClick={() => void 0} variant="warning">
            {"Remove"}
          </Button>
        </div>
        <fieldset className={styles["fieldset"]}>
          <TextInput
            name="first-name"
            label="First name"
            placeholder="Enter your first name"
            value="Jane"
            onChange={() => void 0}
          />
          <TextInput
            name="second-name"
            label="Second name"
            placeholder="Enter your second name"
            value="Robertson"
            onChange={() => void 0}
          />
        </fieldset>
        <fieldset className={styles["fieldset"]}>
          <EmailInput
            name="email"
            label="Email"
            placeholder="name@example.com"
            value="jane.robertson@example.com"
            onChange={() => void 0}
          />
          <TelInput
            name="phone"
            label="Phone number"
            placeholder="(xxx) xxx-xx-xx"
            value="(375) 353-77-77"
            onChange={() => void 0}
          />
        </fieldset>
        <h3 className={styles["subtitle-notifications"]}>
          {"Email notifications"}
        </h3>
        <fieldset className={styles["checkboxes"]}>
          <Checkbox
            name="deals"
            label="New deals"
            onChange={() => void 0}
            checked={true}
          />
          <Checkbox
            name="restaurants"
            label="New restaurants"
            onChange={() => void 0}
            checked={true}
          />
          <Checkbox
            name="order-statuses"
            label="Order statuses"
            onChange={() => void 0}
            checked={true}
          />
          <Checkbox
            name="password-changes"
            label="Password changes"
            onChange={() => void 0}
            checked={true}
          />
          <Checkbox
            name="special-offers"
            label="Special offers"
            onChange={() => void 0}
            checked={true}
          />
          <Checkbox
            name="newsletter"
            label="Newsletters"
            onChange={() => void 0}
            checked={true}
          />
        </fieldset>
        {/* button-logout-mobile has "display: none" above (max-width: 1000px) */}
        <Button
          onClick={() => void 0}
          variant={"warning"}
          mix={styles["button-logout-mobile"]}
        >
          {"Log out"}
        </Button>
        <div className={styles["bottom-container"]}>
          <div className={styles["divider"]}></div>
          {/* button-logout has "display: none" under (max-width: 1000px) */}
          <Button
            onClick={() => void 0}
            variant={"warning"}
            mix={styles["button-logout"]}
          >
            {"Log out"}
          </Button>
          <Button
            onClick={() => void 0}
            mix={styles["button-discard"]}
            variant={"disabled"}
          >
            {"Discard changes"}
          </Button>
          <Button onClick={() => void 0} variant={"filled"}>
            {"Save changes"}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default AccountForm;

import Form from "@/components/_common/form/form";
import styles from "./account-form.module.scss";
import Image from "next/image";
import Button from "@/components/_common/button/button";
import TextInput from "@/components/_common/text-input/text-input";
import EmailInput from "@/components/_common/email-input/email-input";
import TelInput from "@/components/_common/tel-input/tel-input";
import Checkbox from "@/components/_common/checkbox/checkbox";
import classNames from "classnames/bind";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { UserInfo } from "@/contexts/auth-context";
import { accountCheckboxes } from "@/data/data";

let cx = classNames.bind(styles);

type AccountFormProps = {
  user: UserInfo;
  onSignOut: () => void;
  onRemoveUser: (email: string) => void;
  onSubmit: (formData: AccountInputValues, changedKeys: ChangedKeys) => void;
  mix?: string;
};

export type AccountInputValues = {
  -readonly [key in keyof Omit<UserInfo, "uid">]: UserInfo[key];
};

export type ChangedKeys = Partial<keyof AccountInputValues>[];

const AccountForm = ({
  mix,
  onSubmit,
  onSignOut,
  onRemoveUser,
  user,
}: AccountFormProps) => {
  const { firstName, secondName, email, phoneNumber, photoURL, subscriptions } =
    user;

  const formRef = useRef<HTMLFormElement>(null);
  const [isReadOnly, setReadOnly] = useState(true);
  const [inputValues, setInputValues] = useState<AccountInputValues>({
    firstName,
    secondName,
    email,
    phoneNumber,
    subscriptions,
    photoURL,
  });

  const [changedKeys, setChangedKeys] = useState<ChangedKeys>([]);

  // find changed keys and add them to the changedKeys array
  useEffect(() => {
    if (isReadOnly) return;
    const keysArr: ChangedKeys = [];

    for (let key in inputValues) {
      if (key === "subscriptions") {
        const subscr = inputValues.subscriptions;
        for (let subscrKey in subscr) {
          if (
            subscr[subscrKey as keyof AccountInputValues["subscriptions"]] !==
            user.subscriptions[subscrKey as keyof UserInfo["subscriptions"]]
          ) {
            keysArr.push(key as keyof AccountInputValues);
            break;
          }
        }
        continue;
      }
      if (
        inputValues[key as keyof AccountInputValues] !==
        user[key as keyof UserInfo]
      ) {
        keysArr.push(key as keyof AccountInputValues);
      }
    }

    setChangedKeys(keysArr);
  }, [isReadOnly, inputValues, user]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValues, changedKeys);
  };

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setInputValues((prev) => {
      if (type === "checkbox") {
        return {
          ...prev,
          subscriptions: { ...prev.subscriptions, [name]: checked },
        };
      }

      return { ...prev, [name]: value };
    });
  };

  const handleTelInput = (val: string | undefined) => {
    setInputValues((prev) => {
      const inputVal = val ? val : "";
      return { ...prev, phoneNumber: inputVal };
    });
  };

  const handleChangeBtn = (e: SyntheticEvent) => {
    setReadOnly(false);
    if (formRef.current !== null) {
      (formRef.current.elements.namedItem("firstName") as HTMLElement).focus();
    }
  };

  const handleRemoveBtn = (e: SyntheticEvent) => {
    onRemoveUser(user.email);
  };

  const handleSignOut = (e: SyntheticEvent) => {
    onSignOut();
  };

  const handleDiscardBtn = (e: SyntheticEvent) => {
    setInputValues({
      firstName,
      secondName,
      email,
      phoneNumber,
      subscriptions,
      photoURL,
    });
    setReadOnly(true);
    setChangedKeys([]);
  };

  const cnForm = cx("form", mix);
  return (
    <Form className={cnForm} onSubmit={handleSubmit} ref={formRef}>
      <h2 className={styles.title}>{"Account"}</h2>
      <div className={styles.wrapper}>
        <h3 className={styles["subtitle-info"]}>{"Personal information"}</h3>
        <p className={styles.text}>{"Avatar"}</p>
        <div className={styles["upper-container"]}>
          <div className={styles["avatar-container"]}>
            <Image
              src={photoURL}
              alt={"avatar"}
              width={88}
              height={88}
              priority={true}
            />
          </div>
          <Button
            onClick={handleChangeBtn}
            mix={styles["button-change"]}
            variant={isReadOnly ? "disabled" : undefined}
          >
            {"Change"}
          </Button>
          <Button onClick={handleRemoveBtn} variant="warning">
            {"Remove"}
          </Button>
        </div>
        <fieldset className={styles["fieldset"]}>
          <TextInput
            name="firstName"
            label="First name"
            placeholder="Enter your first name"
            value={isReadOnly ? firstName : inputValues.firstName}
            onChange={handleInputs}
            readOnly={isReadOnly}
          />
          <TextInput
            name="secondName"
            label="Second name"
            placeholder="Enter your second name"
            value={isReadOnly ? secondName : inputValues.secondName}
            onChange={handleInputs}
            readOnly={isReadOnly}
          />
        </fieldset>
        <fieldset className={styles["fieldset"]}>
          <EmailInput
            name="email"
            label="Email"
            placeholder="name@example.com"
            value={isReadOnly ? email : inputValues.email}
            onChange={handleInputs}
            readOnly={isReadOnly}
          />
          <TelInput
            name="phoneNumber"
            label="Phone number"
            placeholder="Enter your phone number"
            value={isReadOnly ? phoneNumber : inputValues.phoneNumber}
            onChange={handleTelInput}
            readOnly={isReadOnly}
          />
        </fieldset>
        <h3 className={styles["subtitle-notifications"]}>
          {"Email notifications"}
        </h3>
        <fieldset className={styles["checkboxes"]}>
          {accountCheckboxes.map((i) => (
            <Checkbox
              key={i.id}
              name={i.name}
              label={i.label}
              onChange={handleInputs}
              checked={
                isReadOnly
                  ? subscriptions[i.name]
                  : inputValues.subscriptions[i.name]
              }
              disabled={isReadOnly}
            />
          ))}
        </fieldset>
        {/* button-logout-mobile has "display: none" above (max-width: 1000px) */}
        <Button
          onClick={handleSignOut}
          variant={"warning"}
          mix={styles["button-logout-mobile"]}
        >
          {"Log out"}
        </Button>
        <div className={styles["bottom-container"]}>
          <div className={styles["divider"]}></div>
          {/* button-logout has "display: none" under (max-width: 1000px) */}
          <Button
            onClick={handleSignOut}
            variant={"warning"}
            mix={styles["button-logout"]}
          >
            {"Log out"}
          </Button>
          <Button
            onClick={handleDiscardBtn}
            mix={styles["button-discard"]}
            variant={changedKeys.length === 0 ? "disabled" : undefined}
            disabled={changedKeys.length === 0}
          >
            {"Discard changes"}
          </Button>
          <Button
            onClick={() => void 0}
            variant={changedKeys.length === 0 ? "filled-disabled" : "filled"}
            type="submit"
            disabled={changedKeys.length === 0}
          >
            {"Save changes"}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default AccountForm;

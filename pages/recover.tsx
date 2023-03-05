import AuthLayout from "@/components/_layouts/auth-layout/auth-layout";
import Logo from "@/components/_common/logo/logo";
import Head from "next/head";
import { ReactElement } from "react";
import styles from "../styles/recover.module.scss";
import Link from "next/link";
import RecoverForm, {
  RecoverInputValues,
} from "@/components/_common/recover-form/recover-form";
import { useAuth } from "@/hooks/use-auth";
import { useAppState } from "@/hooks/use-app-state";
import { ADD_MODAL_INFO } from "@/services/actions/actions";

const Recover = () => {
  const { resetPassword } = useAuth();
  const { dispatch } = useAppState();

  const handleRecoverSubmit = async (formData: RecoverInputValues) => {
    const { email } = formData;

    try {
      await resetPassword(email);
      dispatch({
        type: ADD_MODAL_INFO,
        payload: {
          type: "notification",
          info: {
            message: `The letter was sent to the address "${email}". Go to this email address and set a new password`,
          },
        },
      });
    } catch (error: any) {
      dispatch({
        type: ADD_MODAL_INFO,
        payload: { type: "error", info: error },
      });
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Link href={"/"}>
          <Logo />
        </Link>
        <RecoverForm
          mix={styles["recover-form"]}
          onSubmit={handleRecoverSubmit}
        />
      </div>
    </>
  );
};

Recover.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Recover;

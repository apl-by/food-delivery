import AuthLayout from "@/components/_layouts/auth-layout/auth-layout";
import RegisterForm, {
  RegisterInputValues,
} from "@/components/_common/register-form/register-form";
import Logo from "@/components/_common/logo/logo";
import Head from "next/head";
import { ReactElement, useState } from "react";
import styles from "../styles/register.module.scss";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { useAppState } from "@/hooks/use-app-state";
import { ADD_MODAL_INFO } from "@/services/actions/actions";

const Register = () => {
  const [isRequest, setIsRequest] = useState(false);

  const { signUp } = useAuth();
  const { dispatch } = useAppState();

  const handleRegisterSubmit = async (formData: RegisterInputValues) => {
    if (isRequest) return;

    const { email, password } = formData;

    try {
      setIsRequest(true);
      await signUp(email, password);
    } catch (error: any) {
      dispatch({
        type: ADD_MODAL_INFO,
        payload: { modalType: "error", info: error },
      });
    } finally {
      setIsRequest(false);
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
        <RegisterForm
          mix={styles["register-form"]}
          onSubmit={handleRegisterSubmit}
        />
      </div>
    </>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Register;

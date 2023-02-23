import AuthLayout from "@/components/auth-layout/auth-layout";
import RegisterForm from "@/components/_common/register-form/register-form";
import Logo from "@/components/_common/logo/logo";
import Head from "next/head";
import { ReactElement } from "react";
import styles from "../styles/register.module.scss";
import Link from "next/link";

const Register = () => {
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
        <RegisterForm mix={styles["register-form"]} />
      </div>
    </>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Register;

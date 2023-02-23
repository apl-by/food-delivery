import AuthLayout from "@/components/auth-layout/auth-layout";
import Logo from "@/components/_common/logo/logo";
import Head from "next/head";
import { ReactElement } from "react";
import styles from "../styles/recover.module.scss";
import Link from "next/link";
import RecoverForm from "@/components/_common/recover-form/recover-form";

const Recover = () => {
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
        <RecoverForm mix={styles["recover-form"]} />
      </div>
    </>
  );
};

Recover.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Recover;

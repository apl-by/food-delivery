import Head from "next/head";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import styles from "../../styles/account/account.module.scss";
import classNames from "classnames/bind";
import AccountForm, {
  AccountInputValues,
  ChangedKeys,
} from "@/components/_account-page/account-form/account-form";
import AccountLayout from "@/components/_layouts/account-layout/account-layout";
import { useAuth } from "@/hooks/use-auth";
import { useAppState } from "@/hooks/use-app-state";
import { ADD_MODAL_INFO } from "@/services/actions/actions";

let cx = classNames.bind(styles);

const Account: NextPageWithLayout = () => {
  const { user, updData, updEmailWithData, logOut } = useAuth();
  const { dispatch } = useAppState();

  const handleAccountSubmit = async (
    formData: AccountInputValues,
    keys: ChangedKeys
  ) => {
    if (keys.length === 0) return;
    if (!keys.includes("email")) {
      return updData(formData).catch((error) =>
        dispatch({
          type: ADD_MODAL_INFO,
          payload: { modalType: "error", info: error },
        })
      );
    }
    if (keys.includes("email")) {
      updEmailWithData(formData).catch((error) => {
        if (error.message === "Needs reSignIn") {
          return dispatch({
            type: ADD_MODAL_INFO,
            payload: {
              modalType: "reSignIn",
              forInvoke: { actionName: "updEmailWithData", data: formData },
            },
          });
        }
        dispatch({
          type: ADD_MODAL_INFO,
          payload: { modalType: "error", info: error },
        });
      });
    }
  };

  const handleSignOut = () => {
    logOut().catch((error: any) =>
      dispatch({
        type: ADD_MODAL_INFO,
        payload: { modalType: "error", info: error },
      })
    );
  };

  const handleRemoveUser = (email: string) => {
    dispatch({
      type: ADD_MODAL_INFO,
      payload: {
        modalType: "remove",
        forInvoke: { actionName: "removeUser", email },
      },
    });
  };

  if (!user) return null;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountForm
        onSubmit={handleAccountSubmit}
        onSignOut={handleSignOut}
        onRemoveUser={handleRemoveUser}
        user={user}
      />
    </>
  );
};

Account.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default Account;

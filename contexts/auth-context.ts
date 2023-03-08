import { AccountInputValues } from "@/components/_account-page/account-form/account-form";
import { Auth, UserCredential } from "firebase/auth";
import React from "react";

export type SubscriptionsKey =
  | "deals"
  | "restaurants"
  | "orderStatuses"
  | "passwordChanges"
  | "specialOffers"
  | "newsletter";

export type UserInfo = {
  readonly firstName: string;
  readonly secondName: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly photoURL: string;
  readonly subscriptions: { [key in SubscriptionsKey]: boolean };
};

export type AuthContextType = {
  auth: Auth;
  user: UserInfo | null;
  wasFirstAuthCheck: boolean;
  signIn: (email: string, password: string) => Promise<UserCredential | void>;
  signInBrowserSession: (
    email: string,
    password: string
  ) => Promise<UserCredential | void>;
  signUp: (email: string, password: string) => Promise<UserCredential | void>;
  resetPassword: (email: string) => Promise<void>;
  updData: (data: UserInfo) => Promise<void>;
  reSignIn: (email: string, password: string) => Promise<void | UserCredential>;
  logOut: () => Promise<void>;
  removeUser: () => Promise<void>;
  updEmailWithData: (data: AccountInputValues) => Promise<void>;
};

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);

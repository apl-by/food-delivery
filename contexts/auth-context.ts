import { Auth, UserCredential } from "firebase/auth";
import React from "react";

export type UserInfo = {
  readonly uid: string;
  readonly firstName: string;
  readonly secondName: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly photoURL: string;
};

export type UpdNameData = {
  displayName?: string | undefined;
  photoURL?: string | undefined;
};

export type AuthContextType = {
  auth: Auth;
  user: UserInfo | null;
  wasFirstAuthCheck: boolean;
  signIn: (email: string, password: string) => Promise<UserCredential | void>;
  signUp: (email: string, password: string) => Promise<UserCredential | void>;
  resetPassword: (email: string) => Promise<void>;
  updName: (data: UpdNameData) => Promise<void>;
  updEmail: (email: string) => Promise<void>;
};

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);

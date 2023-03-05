import { AuthContext, UpdNameData, UserInfo } from "@/contexts/auth-context";
import { handleError } from "@/utils/errors-handler";
import { auth } from "@/utils/init-firebase";
import { handleUserInfo } from "@/utils/utils";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateEmail,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import { ReactNode, useCallback, useEffect, useState } from "react";

export type AuthProviderProps = {
  children?: ReactNode;
};
export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [wasFirstAuthCheck, setFirstAuthCheck] = useState(false);

  const signUp = useCallback(
    (email: string, password: string): Promise<UserCredential | void> => {
      return createUserWithEmailAndPassword(auth, email, password).catch(
        (e) => {
          throw handleError(e, "signUp");
        }
      );
    },
    []
  );

  const signIn = useCallback(
    (email: string, password: string): Promise<UserCredential | void> => {
      return signInWithEmailAndPassword(auth, email, password).catch((e) => {
        throw handleError(e, "signIn");
      });
    },
    []
  );

  const resetPassword = useCallback((email: string): Promise<void> => {
    return sendPasswordResetEmail(auth, email).catch((e) => {
      console.log(e);

      throw handleError(e);
    });
  }, []);

  const updName = useCallback((data: UpdNameData): Promise<void> => {
    if (!auth.currentUser)
      return Promise.reject({ message: "User does not exist" });
    return updateProfile(auth.currentUser, data).then(() =>
      setUser(handleUserInfo(auth.currentUser))
    );
  }, []);

  const updEmail = useCallback((email: string): Promise<void> => {
    if (!auth.currentUser)
      return Promise.reject({ message: "User does not exist" });
    return updateEmail(auth.currentUser, email).then((e) => {
      console.log(e);

      setUser(handleUserInfo(auth.currentUser));
    });
  }, []);

  useEffect(() => {
    //function that firebase notifies you if a user is set
    const unsubsrcibe = auth.onAuthStateChanged((userData: User | null) => {
      setUser(handleUserInfo(userData));

      setFirstAuthCheck(true);
    });
    return () => unsubsrcibe();
  }, []);

  const values = {
    auth,
    wasFirstAuthCheck,
    user,
    signIn,
    signUp,
    resetPassword,
    updName,
    updEmail,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

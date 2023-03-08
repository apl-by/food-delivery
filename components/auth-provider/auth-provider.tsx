import { AuthContext, UserInfo } from "@/contexts/auth-context";
import { handleError } from "@/utils/errors-handler";
import { auth, database } from "@/utils/init-firebase";
import { onValue, ref, set, child, get, update } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  deleteUser,
  updateEmail,
  signOut,
  User,
  UserCredential,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { initUserDatabase } from "@/data/data";
import { AccountInputValues } from "../_account-page/account-form/account-form";

export type AuthProviderProps = {
  children?: ReactNode;
};
export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [wasFirstAuthCheck, setFirstAuthCheck] = useState(false);

  const removeUser = useCallback((): Promise<void> => {
    return deleteUser(auth.currentUser as User)
      .then(() => setUser(null))
      .catch((e) => {
        throw handleError(e);
      });
  }, []);

  const logOut = useCallback((): Promise<void> => {
    return signOut(auth)
      .catch((e) => {
        throw handleError(e);
      })
      .finally(() => setUser(null));
  }, []);

  const signUp = useCallback(
    async (email: string, password: string): Promise<UserCredential | void> => {
      return createUserWithEmailAndPassword(auth, email, password)
        .then((credential) => {
          // create the database for a new user
          return set(ref(database, "users/" + credential.user.uid), {
            ...initUserDatabase,
            email: credential.user.email as string,
          })
            .then(() => {
              setUser({
                ...initUserDatabase,
                email: credential.user.email as string,
              });
              return;
            })
            .catch(async (e) => {
              // if the database creation fails => delete the newly created user
              await removeUser().catch(() => void 0);
              throw { name: e.name, message: "Sorry, something went wrong" };
            });
        })
        .catch((e) => {
          throw handleError(e, "signUp");
        });
    },
    [removeUser]
  );

  const signIn = useCallback(
    (email: string, password: string): Promise<UserCredential | void> => {
      return signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          const userRef = ref(database);
          // get the user's database for the first time
          return get(child(userRef, `users/${res.user.uid}`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                const data = snapshot.val();
                setUser({
                  ...data,
                  email: auth.currentUser?.email ?? data.email,
                });
                return;
              } else {
                setUser(null);
                throw { name: "Error", message: "Sorry, something went wrong" };
              }
            })
            .catch((e) => {
              throw e;
            });
        })
        .catch((e) => {
          throw handleError(e, "signIn");
        });
    },
    []
  );

  const resetPassword = useCallback((email: string): Promise<void> => {
    return sendPasswordResetEmail(auth, email).catch((e) => {
      throw handleError(e);
    });
  }, []);

  const updData = useCallback((data: UserInfo): Promise<void> => {
    if (!auth.currentUser) {
      return Promise.reject({ message: "User does not exist" });
    }
    const updates = { [`users/${auth.currentUser.uid}`]: data };
    return update(ref(database), updates).catch((e) => {
      throw handleError(e);
    });
  }, []);

  const updEmailWithData = useCallback(
    (data: AccountInputValues): Promise<void> => {
      if (!auth.currentUser) {
        return Promise.reject({ message: "User does not exist" });
      }
      return updateEmail(auth.currentUser, data.email)
        .then(() => {
          // Update the data only after the email is updated, as you may
          // need to log in again to update the email
          return updData(data).catch((e) => {
            throw handleError(e);
          });
        })
        .catch((e) => {
          throw handleError(e);
        });
    },
    [updData]
  );

  const reSignIn = useCallback(
    (email: string, password: string): Promise<void | UserCredential> => {
      if (!auth.currentUser) {
        return Promise.reject({ message: "User does not exist" });
      }
      const credential = EmailAuthProvider.credential(email, password);
      return reauthenticateWithCredential(auth.currentUser, credential).catch(
        (e) => {
          throw handleError(e);
        }
      );
    },
    []
  );

  useEffect(() => {
    //function that firebase notifies you if a user is set
    const unsubsrcibe = auth.onAuthStateChanged((userData: User | null) => {
      setFirstAuthCheck(true);
    });
    return () => unsubsrcibe();
  }, []);

  useEffect(() => {
    if (!wasFirstAuthCheck || !auth.currentUser) {
      return setUser(null);
    }
    //function that firebase reacts for database changes
    const userRef = ref(database, "users/" + auth.currentUser.uid);
    const unsubsrcibe = onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const newData = data
        ? { ...data, email: auth.currentUser?.email ?? data.email }
        : data;
      setUser(newData);
    });
    return () => unsubsrcibe();
  }, [wasFirstAuthCheck]);

  const values = {
    auth,
    wasFirstAuthCheck,
    user,
    signIn,
    signUp,
    resetPassword,
    updData,
    reSignIn,
    logOut,
    removeUser,
    updEmailWithData,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

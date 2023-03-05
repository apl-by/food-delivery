import { FirebaseError } from "firebase/app";

type ErrorFrom = "signIn" | "signUp" | "reSignIn";

export const handleError = (error: Error, from?: ErrorFrom) => {
  const { name } = error;
  if (error instanceof FirebaseError) {
    const { code } = error;

    if (
      from === "signIn" &&
      (code === "auth/invalid-email" ||
        code === "auth/wrong-password" ||
        code === "auth/invalid-password" ||
        code === "auth/user-not-found")
    ) {
      return {
        name,
        message: "Incorrect email or password",
      };
    }

    if (from === "signUp" && code === "auth/invalid-email") {
      return {
        name,
        message: "The provided email is invalid",
      };
    }

    if (
      from === "reSignIn" &&
      (code === "auth/invalid-email" ||
        code === "auth/wrong-password" ||
        code === "auth/invalid-password" ||
        code === "auth/user-not-found" ||
        code === "auth/user-mismatch" ||
        code === "auth/invalid-credential")
    ) {
      return {
        name,
        message: "Incorrect email or password",
      };
    }

    if (
      code === "auth/email-already-exists" ||
      code === "auth/email-already-in-use"
    ) {
      return { name, message: "This email is already exist" };
    }

    if (code === "auth/user-not-found") {
      return { name, message: "The user with this email was not found" };
    }

    if (code === "auth/invalid-password") {
      return {
        name,
        message:
          "The provided value for the password user property is invalid. It must be a string with at least six characters",
      };
    }

    if (code === "auth/network-request-failed") {
      return {
        name,
        message:
          "Any problems with the connection. Сheck your internet connection, and try again",
      };
    }

    if (code === "auth/requires-recent-login") {
      return {
        name,
        message: "needs reSignIn",
      };
    }

    return { name, message: "Sorry, something went wrong on a server side" };
  }

  return { name, message: "Sorry, something went wrong" };
};

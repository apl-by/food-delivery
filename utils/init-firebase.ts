import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

if (typeof document !== "undefined") {
  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
      "6Ldur-ckAAAAAK5kIDv3x2GKabJJXXAW_at9oZtl"
    ),
    isTokenAutoRefreshEnabled: true,
  });
}

export const database = getDatabase(app);

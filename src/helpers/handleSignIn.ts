import React from "react";
import { signIn } from "next-auth/react";

export const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  signIn("google", {
    callbackUrl: "https://www.boostio.ai/api/auth/callback/google",
  });
};

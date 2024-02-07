import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
  const router = useRouter();
  e.preventDefault();
  signIn("google", {
    callbackUrl: "https://www.boostio.ai/api/auth/callback/google",
  });
  router.push("/profiler");
};

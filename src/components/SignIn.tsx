import { signIn } from "next-auth/react";
import svgs from "@/helpers/svgs";
import Button from "@/components/Button";

const SignIn = () => {
  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn("google");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to Boostio</h1>
      <p className="mb-4">Choose an option below to continue:</p>
      <div className="flex flex-row pt-12">
        <Button
          onClick={handleSignIn}
          className="flex items-center mb-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-100 border"
        >
          {svgs.googleLogo}
          <p className="pl-4">Sign Up with Google</p>
        </Button>
        <div className="h-10 w-px bg-gray-300 mx-8"></div>

        <Button
          onClick={handleSignIn}
          className="flex items-center bg-white text-black px-4 py-2 rounded hover:bg-gray-100 border"
        >
          {svgs.googleLogo}
          <p className="pl-4">Sign In with Google</p>
        </Button>
      </div>
    </div>
  );
};

export default SignIn;

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/modal/modal";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { onClose } from "@/redux/slice/modal-login-slice";
import { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebase-config";

export const LoginModal = () => {
  const { open } = useSelector((state: RootState) => state.loginModal);
  const { data: isAuth } = useSelector((state: RootState) => state.authentication);

  const dispatch = useDispatch();
  const onCloseModal = () => {
    dispatch(onClose());
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (email && password) {
        console.log(email);
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        console.log(user);
      }
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const handleLoginWithOAuth = (provider: "github" | "google") => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // githubProvider.addScope("repo");
    // githubProvider.setCustomParameters({
    //     'allow_signup': 'false'
    //   });
      
    const authProvider = provider === "google" ? googleProvider : githubProvider;
    const AuthProvider = provider === "google" ? GithubAuthProvider : GithubAuthProvider;

    signInWithPopup(auth, authProvider)
      .then((result) => {
        // This gives you a Google/Github Access Token. You can use it to access the Google API.

        const credential = AuthProvider.credentialFromResult(result);

        if (credential === null) {
          return null;
        }

        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error: any) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = AuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  };

  // if data is null then return modal;
  if (isAuth) {
    return null;
  };

  return (
    <Modal title={"Log in"} open={open} className="sm:max-h-[450px]" onClose={onCloseModal}>
      <div className="grid gap-4 pr-6 overflow-y-scroll">
        <form onSubmit={(e) => handleSignIn(e)}>
          <div className="space-y-2">
            <Label className="" htmlFor="email">
              Email
            </Label>
            <Input
              className="w-full"
              placeholder="Enter your email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              className="w-full"
              placeholder="Enter your password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            className="w-full mt-4"
            variant={"destructive"}
            size={"lg"}
            type="submit"
          >
            Continue
          </Button>
        </form>

        <div className="flex justify-center items-center gap-2">
          <div className="w-full h-[0.095rem] bg-border" />
          <div>or</div>
          <div className="w-full h-[0.095rem] bg-border" />
        </div>

        <Button
          className="w-full text-black font-nunito"
          size={"lg"}
          variant="black"
          onClick={() => handleLoginWithOAuth("google")}
        >
          Continue with Google
        </Button>
        {/* <Button
          className="w-full text-black"
          size={"lg"}
          variant="black"
          onClick={() => handleLoginWithOAuth("github")}
        >
          Continue with GitHub
        </Button> */}
      </div>
    </Modal>
  );
};

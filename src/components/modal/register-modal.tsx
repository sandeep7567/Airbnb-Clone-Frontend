import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/modal/modal";
import { RootState } from "@/redux/store";

import { useSelector } from "react-redux";
import { onClose } from "@/redux/slice/modal-register-slice";
import { useAppDispatch } from "../../hooks/state";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { app } from "@/firebase/firebase-config";
import { useState } from "react";
import { auth } from "@/firebase/firebase-config";
import { registerThunk } from "@/redux/thunks/authentication";
import { UserI } from "@/types";

export const RegisterModal = () => {
  const dispatch = useAppDispatch();
  const { open } = useSelector((state: RootState) => state.registerModal);
  const { data: isAuth } = useSelector((state: RootState) => state.authentication);
  
  const onCloseModal = () => {
    dispatch(onClose());
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (email && password) {
        console.log(email);
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        
        await updateProfile(user, { displayName: name, photoURL: user?.photoURL ?? "https://i.stack.imgur.com/l60Hf.png" });

        const userInfo: UserI = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user?.photoURL,
          password: password,
          uid: user.uid,
        };
        
        dispatch(registerThunk(userInfo));
      };
      
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  if (isAuth) {
    return null;
  };

  return (
    <Modal title={"Log in"} open={open} onClose={onCloseModal}>
      <div className="grid gap-4 py-4 p-0 mt-4 pr-6 h-4/5 overflow-y-scroll">

        <form onSubmit={(e) => handleRegister(e)}>
          <div className="space-y-2">
            <Label className="" htmlFor="name">
              User Name
            </Label>
            <Input
              className="w-full"
              placeholder="Enter your user name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
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
        >
          Continue with Google
        </Button>
        <Button className="w-full text-black" size={"lg"} variant="black">
          Continue with GitHub
        </Button>
      </div>
    </Modal>
  );
};

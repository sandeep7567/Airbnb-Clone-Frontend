import Landing from "@/components/web/landing";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { auth } from "./firebase/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useAppDispatch } from "./hooks/state";
import { isAuth, logout } from "./redux/slice/authentication-slice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const userInfo = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL ?? undefined,
          uid: user.uid,
        };
        
        dispatch(isAuth(userInfo));
      } else {
        signOut(auth)
          .then(() => console.log("User is signed out"))
          .catch((error) => console.log("logout failed", error));

        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;

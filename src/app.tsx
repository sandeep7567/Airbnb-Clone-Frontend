import Landing from "@/components/web/landing";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { auth } from "./firebase/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        console.log(user?.uid);
        console.log("User is sign in");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...
      } else {
        signOut(auth)
          .then(() => console.log("User is signed out"))
          .catch((error) => console.log("logout failed", error));
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;

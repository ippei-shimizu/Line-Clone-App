import { Button } from "@mui/material";
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

function SingIn() {
  // firebaseでgoogleの認証機能
  function signInGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);
  }

  return (
    <div>
      <Button onClick={signInGoogle}>GoogleでsignInする</Button>
    </div>
  );
}

export default SingIn;

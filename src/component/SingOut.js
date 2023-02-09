import { Button } from "@mui/material";
import React from "react";
import { auth } from "../firebase";

function SingOut() {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>SingOut</Button>
    </div>
  );
}

export default SingOut;

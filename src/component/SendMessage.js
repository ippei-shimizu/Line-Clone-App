import React, { useState } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";

function SendMessage() {
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    const collection = db.collection("playlists");
    const newDoc = collection.doc().id;

    db.collection("messages").add({
      text: message,
      photoURL,
      id: newDoc,
      uid,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMessage">
          <input
            placeholder="メッセージを入力してください"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;

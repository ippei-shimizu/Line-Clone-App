import "./App.css";
import SingIn from "./component/SingIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Line from "./component/Line";

function App() {
  const [user] = useAuthState(auth);

  return <div className="App">{user ? <Line /> : <SingIn />}</div>;
}

export default App;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Notification from "./Notification";

function App() {
  const [count, setCount] = useState(0);

  /* useEffect(() => {
    connectFCM().then((token) => {
      console.log(token);
      fetch("http://localhost:3000/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
    });
  }, []);
*/
  return <Notification />;
}

export default App;

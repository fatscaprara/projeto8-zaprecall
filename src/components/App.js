import { useState } from "react";
import Home from "./home/Home";

export default function App() {
  const [visible, setVisible] = useState(true);

  return <>{visible ? <Home setVisible={setVisible} /> : ""}</>;
}

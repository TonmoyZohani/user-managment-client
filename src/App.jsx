import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Users from "./components/Users";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>User Management</h2>
      <Users />
    </>
  );
}

export default App;

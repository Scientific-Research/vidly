import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <h1>Hello World!</h1>
    </main>
  );
}

export default App;

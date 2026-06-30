import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {

  const [count, setCount] = useState(0);
  const [data, setdata] = useState(0);

  return (
    <div>
      <Counter count = {count} data = {data} />
      
      <button onClick={() => setCount(count+1)}>Counter {count}</button>

      <button onClick={() => setdata(data+1)}>Data {data}</button>
    </div>
  );
}

export default App;


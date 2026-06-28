import { useState } from "react";
import "./App.css";


//  CONTROLLED COMPONENTS :-

/*A controlled component is a form whose input values are controlled by React state. In a controlled component, the value of the 
input field is set by the state, and any changes to the input field are handled by an event handler that updates the state.*/

function App() {

    const[name, setName] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");


  return (
    <div>
      <h1>Controlled Components</h1>
      <form action ="" method="get">
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Name" />
        <br/><br/>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" />
        <br/><br/>
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email"/>
        <br/><br/>
        <button>Submit</button>

        <button onClick={() => {setEmail(''); setPassword(''); setName('')}}>Clear</button>
        <h3>Name : {name}</h3>
        <h3>Password: {password}</h3>
        <h3>Email: {email}</h3>
      </form>
    </div>
  );
}

export default App;


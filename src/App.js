import './App.css';
import Form from "./Form"
import Header from "./Header"
import {useState, useEffect} from "react"

function App() {

  useEffect(() => {
    fetch("http://localhost:9292/test")
    .then((res) => res.json())
    .then(console.log)
  })
  
  return (
    <div className="App">
      <Header/>
      <Form/>
    </div>
  );
}

export default App;

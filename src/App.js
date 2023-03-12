import './App.css';
import Form from "./Form"
import Header from "./Header"
import Container from "./Container"
import {useState, useEffect} from "react"
import { Route, Switch } from 'react-router-dom';

function App() {

  useEffect(() => {
    fetch("http://localhost:9292/test")
    .then((res) => res.json())
    .then(console.log)
  })
  
  return (
    <div className="App">
      <Header/>
      <Switch>

      <Route exact path="/form">
        <Form/>
      </Route>

      <Route exact path="/">
        <Container/>
      </Route>

      </Switch>
    </div>
  );
}

export default App;

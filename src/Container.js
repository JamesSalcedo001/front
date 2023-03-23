import Form from "./Form"
import {useState, useEffect} from "react"
import { Route, Switch } from 'react-router-dom';


function Container() {
    useEffect(() => {
        fetch("http://localhost:9292/test")
        .then((res) => res.json())
        .then(console.log)
      })

    return (
        <div>
            <Switch>
                <Route exact path="/form">
                    <Form/>
                </Route>

                {/* <Route exact path="/">

                </Route> */}
            </Switch>

        </div>
    )
}

export default Container;
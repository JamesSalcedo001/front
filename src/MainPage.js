import Form from "./Form"
import CatsList from "./CatsList"
import {useState, useEffect} from "react"
import { Route, Switch } from 'react-router-dom';


function MainPage() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/cats")
        .then((res) => res.json())
        .then(console.log)
      })

    return (
        <div>
            <Switch>
                <Route exact path="/form">
                    <Form/>
                </Route>

                <Route exact path="/">
                    <CatsList/>
                </Route>
            </Switch>

        </div>
    )
}

export default MainPage;
import Form from "./Form"
import CatsList from "./CatsList"
import SheltersList from "./SheltersList"
import {useState, useEffect} from "react"
import { Route, Switch } from 'react-router-dom';


function MainPage() {
    const [cats, setCats] = useState([])
    const [shelters, setShelters] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/cats")
        .then((res) => res.json())
        .then((catCollection) => setCats(catCollection))
      },[])
      
      useEffect(() => {
        fetch("http://localhost:9292/shelters")
        .then((res) => res.json())
        .then((shelterCollection) => setShelters(shelterCollection))
      },[])


    return (
        <div>
            <Switch>
                <Route exact path="/form">
                    <Form/>
                </Route>

                <Route exact path="/shelterslist">
                    <SheltersList shelters={shelters}/>
                </Route>

                <Route exact path="/">
                    <CatsList cats={cats}/>
                </Route>
            </Switch>

        </div>
    )
}

export default MainPage;
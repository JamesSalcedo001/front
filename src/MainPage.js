// import AddCatForm from "./AddCatForm"
// import AddShelterForm from "./AddShelterForm"
// import CatsList from "./CatsList"
// import SheltersList from "./SheltersList"
// import {useState, useEffect} from "react"
// import { Route, Switch } from 'react-router-dom';


// function MainPage() {
//     const [cats, setCats] = useState([])
//     const [shelters, setShelters] = useState([])

//     useEffect(() => {
//         fetch("http://localhost:9292/cats")
//         .then((res) => res.json())
//         .then((catCollection) => setCats(catCollection))
//       },[])
      
    
//       useEffect(() => {
//         fetch("http://localhost:9292/shelters")
//         .then((res) => res.json())
//         .then((shelterCollection) => setShelters(shelterCollection))
//       },[])


//       function addCat(newCat) {
//         setCats((catArr) => [...catArr, newCat])
//       }

//       function addShelter(newShelter) {
//         setShelters((shelterArr) => [...shelterArr, newShelter])
//       }

//       function catRemoved(id) {
//         const removedCatArr = cats.filter((catObj) => catObj.id !== id)
//         setCats(removedCatArr)
//       }


//       function editCat(target) {
//         const updateCats = cats.map((catObj) => {
//             if (catObj.id === target.id) {
//                 return target
//             } else {
//                 return catObj
//             }
//         })
//         setCats(updateCats)
//       }


//     return (
//         <div>
//             <Switch>
//                  <Route exact path="/add-cat-form">
//                     <AddCatForm addCat={addCat}/>
//                 </Route> 

//                 <Route exact path="/add-shelter-form">
//                     <AddShelterForm addShelter={addShelter}/> 
//                 </Route>

//                 <Route exact path="/shelters">
//                     <SheltersList shelters={shelters} cats={cats} />
//                 </Route>

//                 <Route exact path="/">
//                     <CatsList cats={cats} catRemoved={catRemoved} editCat={editCat} />
//                 </Route>

//             </Switch>

//         </div>
//     )
// }

// export default MainPage;







import {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"
import EditCatsForm from "./EditCatsForm"
import AddShelterForm from "./AddShelterForm"
import AddCatForm from "./AddCatForm"
import CatsList from "./CatsList"
import SheltersList from "./SheltersList"


function MainPage() {
    const [catState, setCatState] = useState([])
    const [shelterState, setShelterState] = useState([])
    const [clickedCat, setClickedCat] = useState("")

    useEffect(() => {
        fetch("http://localhost:9292/cats")
        .then((res) => res.json())
        .then((data) => setCatState(data))
    },[])

    useEffect(() => {
        fetch("http://localhost:9292/shelters")
        .then((res) => res.json())
        .then((data) => setShelterState(data))
    },[])


    function addCat(newCat) {
        setCatState([...catState, newCat])
    }

    function addShelter(newShelter) {
        setShelterState([...shelterState, newShelter])
    }

    function catRemoved(id) {
        const removedCatArr = catState.filter((catObj) => catObj.id !== id)
        setCatState(removedCatArr)
    }


    function changeHandler(name, value) {
        setClickedCat({
            ...clickedCat,
            [name]: value
        })
    }

    function editCat(updatedCat) {
        const updatedCatsArr = catState.map(cat => cat.id === updatedCat.id ? updatedCat : cat)
            setClickedCat(updatedCatsArr)
            setCatState(updatedCatsArr)
    }




    return (
        <div>
            <Switch>
                <Route exact path="/cats/:id/edit">
                    <EditCatsForm editCat={editCat} changeHandler={changeHandler} catObj={clickedCat}/>
                </Route>

                <Route exact path="/shelters">
                    <SheltersList shelters={shelterState} catState={catState}/>
                </Route>

                <Route exact path="/add_shelter">
                    <AddShelterForm addShelter={addShelter}/>
                </Route>

                <Route exact path="/add_cat">
                    <AddCatForm addCat={addCat} shelters={shelterState}/>
                </Route>

                <Route exact path="/">
                    <CatsList catState={catState} catRemoved={catRemoved} setClickedCat={setClickedCat}/>
                </Route>
            </Switch>
        </div>
    )
}

export default MainPage;
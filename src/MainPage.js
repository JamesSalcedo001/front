import AddCatForm from "./AddCatForm"
import AddShelterForm from "./AddShelterForm"
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


      function addCat(newCat) {
        setCats((catArr) => [...catArr, newCat])
      }

      function addShelter(newShelter) {
        setShelters((shelterArr) => [...shelterArr, newShelter])
      }

      function catRemoved(id) {
        const removedCatArr = cats.filter((catObj) => catObj.id !== id)
        setCats(removedCatArr)
      }


      function editCat(target) {
        const updateCats = cats.map((catObj) => {
            if (catObj.id === target.id) {
                return target
            } else {
                return catObj
            }
        })
        setCats(updateCats)
      }


    return (
        <div>
            <Switch>
                <Route exact path="/addcatform">
                    <AddCatForm addCat={addCat}/>
                </Route>

                <Route exact path="/addshelterform">
                    <AddShelterForm addShelter={addShelter}/>
                </Route>

                <Route exact path="/shelters">
                    <SheltersList shelters={shelters} />
                </Route>

                <Route exact path="/cats">
                    <CatsList cats={cats} catRemoved={catRemoved} editCat={editCat}/>
                </Route>
            </Switch>

        </div>
    )
}

export default MainPage;























{/* <Route exact path="/editcatform/:id">
        <EditCatForm cats={cats} editCat={editCat} />
    </Route> */}




// import EditCatForm from "./EditCatForm"


// edit form component separate, works but won't populate values in input fields



// import {useState} from "react"
// import {useHistory, useParams} from "react-router-dom"

// function EditCatForm({cats, editCat }) {
//     const { name, age, breed, descr, image, shelter_id} = cats

//     const [formData, setFormData] = useState(cats)

//     const history = useHistory()
//     const { id } = useParams()

//     function changeHandler(e) {
//         const {name, value} = e.target
//         setFormData((formDataObj) => ({...formDataObj, [name]:value }))
//     }

//     function submit(e) {
//         e.preventDefault()
//         fetch(`http://localhost:9292/cats/${id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 name: formData.name,
//                 age: formData.age,
//                 breed: formData.breed,
//                 descr: formData.descr,
//                 image: formData.image,
//                 shelter_id: formData.shelter_id
//             }),
//         })
//         .then((res) => res.json())
//         .then((targetCat) => {
//             editCat(targetCat)
//         })
//         history.push("/cats")
//     }

//     return (
//         <div>
//             <section>
//                 <form className="formStyle" onSubmit={submit}>
//                     <label>Name</label>
//                     <input className="formInput" value={name} onChange={changeHandler} type="text" name="name" placeholder="name"/>

//                     <label>Breed</label>
//                     <input className="formInput" value={breed} onChange={changeHandler} type="text" name="breed" placeholder="breed"/>

//                     <label>Age</label>
//                     <input className="formInput" value={age} onChange={changeHandler} type="text" name="age" placeholder="age"/>

//                     <label>Description</label>
//                     <input className="formInput" value={descr} onChange={changeHandler} type="text" name="description" placeholder="description"/>

//                     <label>Image</label>
//                     <input className="formInput" value={image} onChange={changeHandler} type="text" name="image" placeholder="image"/>

//                     <label>Shelter ID</label>
//                     <input className="formInput" value={shelter_id} onChange={changeHandler} type="number" step="1" name="shelter_id" placeholder="shelter_id"/>

//                     <input className="formInput" type="submit" value="Update Cat"/>

//                 </form>
//             </section>
//         </div>
//     )
// }

// export default EditCatForm;







//2: form edited with separate state values with no luck. issue might be with hierarchy. 
// needs access to data the way it's passed down into the card component.





// import {useState} from "react"
// import {useHistory, useParams} from "react-router-dom"

// function EditCatForm({cats, editCat }) {
//     const { id, name, age, breed, descr, image, shelter_id} = cats

//     const [newName, setNewName] = useState(name)
//     const [newBreed, setNewBreed] = useState(breed)
//     const [newAge, setNewAge] = useState(age)
//     const [newDescr, setNewDescr] = useState(descr)
//     const [newImage, setNewImage] = useState(image)
//     const [newShelterId, setNewShelterId] = useState(shelter_id)


//     const history = useHistory()
//     // const { id } = useParams()



//      function submit(e) {
//         e.preventDefault()
//         fetch(`http://localhost:9292/cats/${id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 image: newImage,
//                 name: newName,
//                 breed: newBreed,
//                 age: newAge,
//                 descr: newDescr,
//                 shelter_id: newShelterId
//             }),
//         })
//         .then((res) => res.json())
//         .then((targetCat) => {
//             editCat(targetCat)
//         })
//         history.push("/cats")
//     }



//     return (
//         <div>
//             <section>
//                 <form className="formStyle" onSubmit={submit}>
//                     <label>Name</label>
//                     <input value={newName} type="text" onChange={(e) => setNewName(e.target.value)} placeholder="new name"/>

//                     <label>Breed</label>
//                     <input value={newBreed} type="text" onChange={(e) => setNewBreed(e.target.value)} placeholder="new breed"/>

//                     <label>Age</label>
//                     <input value={newAge} type="number" onChange={(e) => setNewAge(parseFloat(e.target.value))} placeholder="new age"/>

//                     <label>Description</label>
//                     <input value={newDescr} type="text" onChange={(e) => setNewDescr(e.target.value)} placeholder="new description"/>

//                     <label>Image</label>
//                     <input value={newImage} type="text" onChange={(e) => setNewImage(e.target.value)} placeholder="new image"/>

//                     <label>Shelter ID</label>
//                     <input value={newShelterId} type="number" onChange={(e) => setNewShelterId(parseFloat(e.target.value))} placeholder="new description"/>

//                     <input type="submit" value="Update Cat"/>

//                 </form>
//             </section>
//         </div>
//     )
// }

// export default EditCatForm;
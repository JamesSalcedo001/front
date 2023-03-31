import { useState } from "react";


function CatCard({catObj, catRemoved, editCat}) {
    const {id, name, age, breed, descr, image, shelter_id } = catObj

    const [newName, setNewName] = useState(name)
    const [newBreed, setNewBreed] = useState(breed)
    const [newAge, setNewAge] = useState(age)
    const [newDescr, setNewDescr] = useState(descr)
    const [newImage, setNewImage] = useState(image)
    const [newShelterId, setNewShelterId] = useState(shelter_id)


    function removeCat() {
        fetch(`http://localhost:9292/cats/${id}`, {
            method: "DELETE",
        })
        catRemoved(id)
    }


    function submit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/cats/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image: newImage,
                name: newName,
                breed: newBreed,
                age: newAge,
                descr: newDescr,
                shelter_id: newShelterId
            }),
        })
        .then((res) => res.json())
        .then((targetCat) => {
            editCat(targetCat)
        })
    }

   

    return (
        <div className="cards">
            <img className="image" src={image} alt={name}/>
            <h3>Name: {name}</h3>
            <h3>Breed: {breed}</h3>
            <h3>Age: {age}</h3>
            <h3>Description: {descr}</h3>
            <form id="cardForm" onSubmit={submit}>
                Edit Cat Here (maybe conditional  rendering)
                <input className="formInputCard" value={newImage} type="text" onChange={(e) => setNewImage(e.target.value)} placeholder="new image"/>
                <input className="formInputCard" value={newName} type="text" onChange={(e) => setNewName(e.target.value)} placeholder="new name"/>
                <input className="formInputCard" value={newBreed} type="text" onChange={(e) => setNewBreed(e.target.value)} placeholder="new breed"/>
                <input className="formInputCard" value={newAge} type="number" onChange={(e) => setNewAge(parseFloat(e.target.value))} placeholder="new age"/>
                <input className="formInputCard" value={newDescr} type="text" onChange={(e) => setNewDescr(e.target.value)} placeholder="new description"/>
                <input className="formInputCard" value={newShelterId} type="number" onChange={(e) => setNewShelterId(parseFloat(e.target.value))} placeholder="new description"/>
                <input className="formInputCard" type="submit"/>
            </form>
            <button className="cardButton" onClick={removeCat}>Adopt!</button>
        </div>
    )
}

export default CatCard;






























// import { NavLink } from "react-router-dom"
{/* <NavLink to={`/editcatform/${id}`}> */}
{/* <button className="cardButton">Update Cat</button> */}
{/* <EditCatForm cats={catObj} editCat={editCat} /> */}
{/* </NavLink> */}           
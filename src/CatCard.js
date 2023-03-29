import { NavLink } from "react-router-dom"

function CatCard({catObj, catRemoved}) {
    const {id, name, age, breed, descr, image} = catObj

    function removeCat() {
        fetch(`http://localhost:9292/cats/${id}`, {
            method: "DELETE",
        })
        catRemoved(id)
    }

    return (
        <div className="cards">
            <img className="image" src={image} alt={name}/>
            <h3>Name: {name}</h3>
            <h3>Breed: {breed}</h3>
            <h3>Age: {age}</h3>
            <h3>Description: {descr}</h3>
            <button className="cardButton" onClick={removeCat}>Adopt!</button>
            <NavLink to={`/editcatform/${id}`}>
                <button className="cardButton">Update Cat</button>
            </NavLink>
        </div>
    )
}

export default CatCard;
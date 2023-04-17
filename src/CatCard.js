import { NavLink } from "react-router-dom";


function CatCard({catObj, catRemoved, setClickedCat}) {
    const {id, cat_name, age, breed, descr, cat_image } = catObj

    const shelterName = catObj.shelter.name
    const shelterImage = catObj.shelter.image
    const shelterEmployees = catObj.shelter.employees
    const shelterLocation = catObj.shelter.location


    function editCatButton() {
        setClickedCat(catObj)
    }

    function adoptCat() {
        fetch(`http://localhost:9292/cats/${id}`, {
            method: "DELETE",
        });
        catRemoved(id)
    }


    return (
        <div className="catCards">
            <section id="catSec">
                <img className="image" src={cat_image} alt={cat_name}/>
                <h1>Name: {cat_name}</h1>
                <h3>Breed: {breed}</h3>
                <h3>Age: {age}</h3>
                <h3>Description: {descr}</h3>
            </section>

            <section id="shelterSec">
                <img className="shelterImage" src={shelterImage} alt={shelterName}/>
                <h1>Shelter: {shelterName}</h1>
                <h3>Employee Count: {shelterEmployees}</h3>
                <h3>Shelter Location: {shelterLocation}</h3>
            </section>
            <NavLink to={`/cats/${id}/edit`}>
                    <button className="cardButton" onClick={editCatButton}>Edit Cat!</button>
                </NavLink>
            <button className="cardButton" onClick={adoptCat}>Adopt Cat!</button>
        </div>
    )
}

export default CatCard;
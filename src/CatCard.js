function CatCard({catObj, catRemoved}) {
    const {id, name, age, breed, descr, image} = catObj

    function removeCat() {
        fetch(`http://localhost:9292/cats/${id}`, {
            method: "DELETE",
        })
        catRemoved(id)
    }

    return (
        <div>
            <img className="image" src={image} alt={name}/>
            <h3>Name: {name}</h3>
            <h3>Breed: {breed}</h3>
            <h3>Age: {age}</h3>
            <h3>Description: {descr}</h3>
            <button onClick={removeCat}>Adopt!</button>
        </div>
    )
}

export default CatCard;
function CatCard({catObj}) {
    const {id, name, age, breed, descr, image} = catObj

    return (
        <div>
            <img className="image" src={image} alt={name}/>
            <h3>Name: {name}</h3>
            <h3>Breed: {breed}</h3>
            <h3>Age: {age}</h3>
            <h3>Description: {descr}</h3>
            <button>Adopt!</button>
            <form>Update cat new idea</form>
        </div>
    )
}

export default CatCard;
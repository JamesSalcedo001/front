
function ShelterCard({shelterObj, catState}) {
    const {name, location, image, employees} = shelterObj

    const cats = catState.map((catObj) => {
        return (
            <option key={catObj.id} value={catObj.id}>{catObj.shelter_id === shelterObj.id ? catObj.cat_name : ""}</option>
        )
    })

    return (
        <div className="shelterCards">
            <img className="image" alt={name} src={image}/>
            <h1>NAME: {name}</h1>
            <h3>LOCATION: {location}</h3>
            <h3>EMPLOYEES: {employees}</h3>
            Shelter Cats:
            <select id="selector">
                {cats}
            </select>
        </div>
    )
}

export default ShelterCard;

function ShelterCard({shelterObj}) {
    const {name, location, image, employees} = shelterObj
    // console.log(shelterObj.cats)
   

    return (
        <div className="shelterCards">
            <img className="image" alt={name} src={image}/>
            <h1>NAME: {name}</h1>
            <h3>LOCATION: {location}</h3>
            <h3>EMPLOYEES: {employees}</h3>
            Shelter Cats:
            <select id="cars">
                {shelterObj.cats.map((option) => ( <option key={option.name} value={option.value}>{option.name}</option>))}
            </select>
        </div>
    )
}

export default ShelterCard;



function ShelterCard({shelterObj}) {
    const {name, location, image, employees} = shelterObj

 

    return (
        <div className="shelterCards">
            <img className="image" alt={name} src={image}/>
            <h1>NAME: {name}</h1>
            <h3>LOCATION: {location}</h3>
            <h3>EMPLOYEES: {employees}</h3>
        </div>
    )
}

export default ShelterCard;
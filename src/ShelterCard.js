function ShelterCard({shelterObj}) {
    const {name, location, image, employees} = shelterObj
   

    return (
        <div>
            <img src={image}/>
            <h1>NAME: {name}</h1>
            <h3>LOCATION: {location}</h3>
            <h3>EMPLOYEES: {employees}</h3>
        </div>
    )
}

export default ShelterCard;

    
    // console.log(catObj.shelter.name)
    // console.log(catObj.shelter.location)
    // console.log(catObj.shelter.image)
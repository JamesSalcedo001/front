
function ShelterCard({shelterObj}) {
    const {name, location, image, employees} = shelterObj
   

    return (
        <div className="cards">
            <img className="image" src={image}/>
            <h1>NAME: {name}</h1>
            <h3>LOCATION: {location}</h3>
            <h3>EMPLOYEES: {employees}</h3>
            <select id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}

export default ShelterCard;


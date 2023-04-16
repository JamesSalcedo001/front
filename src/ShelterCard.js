
// // This is the original. The state is not synched because the cats accessed in the options are part of the shelter state,
// // not the cat state. However this shows which shelter has which cats in it. It does persist, but only AFTER a refresh which is the issue.

// function ShelterCard({shelterObj}) {


//     const {name, location, image, employees} = shelterObj
//     return (
//         <div className="shelterCards">
//             <img className="image" alt={name} src={image}/>
//             <h1>NAME: {name}</h1>
//             <h3>LOCATION: {location}</h3>
//             <h3>EMPLOYEES: {employees}</h3>
//             Shelter Cats:
//             <select id="selector">
//                 {shelterObj.cats.map((catObj) => ( <option key={catObj.id} value={catObj}>{catObj.name}</option> ))}
//             </select>
//         </div>
//     )
// }

// export default ShelterCard;




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
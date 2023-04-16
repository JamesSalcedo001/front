// import ShelterCard from "./ShelterCard"

// function SheltersList({shelters, cats}) {
    
//     const shelterMap = shelters.map((shelterObj) => {
//         return <ShelterCard key={shelterObj.id} shelterObj={shelterObj} cats={cats}/>
//     })

//     return (
//         <div>
//             <ul className="shelterCardBox">{shelterMap}</ul>
//         </div>
//     )
// }

// export default SheltersList;




import ShelterCard from "./ShelterCard"

function SheltersList({shelters, catState}) {
    
    const shelterMap = shelters.map(shelterObj => {
        return (
            <ShelterCard key={shelterObj.id} shelterObj={shelterObj} catState={catState}/>
        )
    })
    return (
        <ul className="shelterCardBox">{shelterMap}</ul>
    )
}

export default SheltersList;
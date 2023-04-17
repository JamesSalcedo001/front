import ShelterCard from "./ShelterCard"

function SheltersList({shelters}) {
    
    const shelterMap = shelters.map(shelterObj => {
        return (
            <ShelterCard key={shelterObj.id} shelterObj={shelterObj}/>
        )
    })
    return (
        <ul className="shelterCardBox">{shelterMap}</ul>
    )
}

export default SheltersList;
import ShelterCard from "./ShelterCard"

function SheltersList({shelters}) {
    
    const shelterMap = shelters.map((shelterObj) => {
        return <ShelterCard key={shelterObj.id} shelterObj={shelterObj}/>
    })

    return (
        <div>
            <ul>{shelterMap}</ul>
        </div>
    )
}

export default SheltersList;
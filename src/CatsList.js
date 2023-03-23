import CatCard from "./CatCard"

function CatsList({cats}) {
    
    const catMap = cats.map((catObj) => {
        return <CatCard key={catObj.id} catObj={catObj}/>
    })

    return (
        <div>
            <ul>{catMap}</ul>
        </div>
    )
}

export default CatsList;
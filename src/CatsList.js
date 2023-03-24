import CatCard from "./CatCard"

function CatsList({cats, catRemoved}) {
    
    const catMap = cats.map((catObj) => {
        return <CatCard key={catObj.id} catObj={catObj} catRemoved={catRemoved}/>
    })

    return (
        <div>
            <ul className="cardBox">{catMap}</ul>
        </div>
    )
}

export default CatsList;
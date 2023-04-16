import CatCard from "./CatCard"

function CatsList({catState, catRemoved, setClickedCat}) {
   

    
    const catMap = catState.map(catObj => {
        return (
            <CatCard key={catObj.id} catObj={catObj} setClickedCat={setClickedCat} catRemoved={catRemoved}/>
        )
    })
    

    return (
        <div>
            <ul className="catCardBox">{catMap}</ul>
        </div>
    )
}

export default CatsList;
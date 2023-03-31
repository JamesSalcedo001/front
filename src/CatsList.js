import CatCard from "./CatCard"

function CatsList({cats, catRemoved, editCat}) {
   

    
    const catMap = cats.map((catObj) => {
        return <CatCard key={catObj.id} catObj={catObj} catRemoved={catRemoved} editCat={editCat}/>
    })
    

    return (
        <div>
            <ul className="catCardBox">{catMap}</ul>
        </div>
    )
}

export default CatsList;



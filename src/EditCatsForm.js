import { useHistory } from "react-router-dom";

function EditCatsForm({editCat, changeHandler, catObj}) {

    const history = useHistory()

    function handlChange(e) {
        changeHandler(e.target.name, e.target.value)
    }


    function submitEditForm(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/cats/${catObj.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cat_name: catObj.cat_name,
                breed: catObj.breed,
                age: catObj.age,
                descr: catObj.descr,
                cat_image: catObj.cat_image,
                shelter_id: catObj.shelter_id
            }),
        })
        .then((res) => res.json())
        .then(editCat);
        history.push("/")
    }

    if(!catObj) return null;

    return (
        <div>
            <section>
                <form onSubmit={submitEditForm}>
                    <input className="formInput" type="text" name="cat_name" placeholder="cat_name" onChange={handlChange} value={catObj.cat_name ?? ""} />
                    <input className="formInput" type="text" name="cat_image" placeholder="cat_image" onChange={handlChange} value={catObj.cat_image ?? ""} />
                    <input className="formInput" type="text" name="breed" placeholder="breed" onChange={handlChange} value={catObj.breed ?? ""} />
                    <input className="formInput" type="number" name="age" placeholder="age" step="1" max="12" min="1" onChange={handlChange} value={catObj.age ?? ""} />
                    <input className="formInput" type="text" name="descr" placeholder="descr" onChange={handlChange} value={catObj.descr ?? ""} />
                    <input className="formInput"  type="number" name="shelter_id" step="1" max="10" min="1" placeholder="shelter_id" onChange={handlChange} value={catObj.shelter_id ?? ""} />
                    <input type="submit" value="Update Cat"/>
                </form>
            </section>
        </div>
    )
}

export default EditCatsForm;
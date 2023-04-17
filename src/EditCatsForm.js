import { useHistory } from "react-router-dom";

function EditCatsForm({editCat, changeHandler, catObj}) {

    const history = useHistory()

    function handleChange(e) {
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
                <form className="formStyle" onSubmit={submitEditForm}>
                    <label htmlFor="Cat Name">Cat Name</label>
                    <input className="formInput" type="text" name="cat_name" placeholder="cat_name" onChange={handleChange} value={catObj.cat_name ?? ""} />

                    <label htmlFor="Cat Image">Cat Image</label>
                    <input className="formInput" type="text" name="cat_image" placeholder="cat_image" onChange={handleChange} value={catObj.cat_image ?? ""} />

                    <label htmlFor="Cat Breed">Cat Breed</label>
                    <input className="formInput" type="text" name="breed" placeholder="breed" onChange={handleChange} value={catObj.breed ?? ""} />

                    <label htmlFor="Cat Age">Cat Age</label>
                    <input className="formInput" type="number" name="age" placeholder="age" step="1" max="12" min="1" onChange={handleChange} value={catObj.age ?? ""} />

                    <label htmlFor="Cat Description">Cat Description</label>
                    <input className="formInput" type="text" name="descr" placeholder="descr" onChange={handleChange} value={catObj.descr ?? ""} />

                    <label htmlFor="Shelter ID">Shelter ID</label>
                    <input className="formInput" type="number" name="shelter_id" step="1" max="10" min="1" placeholder="shelter_id" onChange={handleChange} value={catObj.shelter_id ?? ""} />

                    <input className="formInput" type="submit" value="Update Cat"/>
                </form>
            </section>
        </div>
    )
}

export default EditCatsForm;
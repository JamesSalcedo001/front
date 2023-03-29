import {useState} from "react"
import {useHistory, useParams} from "react-router-dom"

function EditCatForm({cats, editCat}) {
    const {name, age, breed, descr, image, shelter_id} = cats

    const [formData, setFormData] = useState(cats)

    const history = useHistory()
    const { id } = useParams()

    function changeHandler(e) {
        const {name, value} = e.target
        setFormData((formDataObj) => ({...formDataObj, [name]:value }))
    }

    function submit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/cats/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                age: formData.age,
                breed: formData.breed,
                descr: formData.descr,
                image: formData.image,
                shelter_id: formData.shelter_id
            })
        })
        .then((res) => res.json())
        .then((targetCat) => {
            editCat(targetCat)
        })
        history.push("/cats")
    }

    return (
        <div>
            <section>
                <form className="formStyle" onSubmit={submit}>
                    <label>Name</label>
                    <input value={name} onChange={changeHandler} type="text" name="name" placeholder="name"/>

                    <label>Breed</label>
                    <input value={breed} onChange={changeHandler} type="text" name="breed" placeholder="breed"/>

                    <label>Age</label>
                    <input value={age} onChange={changeHandler} type="text" name="age" placeholder="age"/>

                    <label>Description</label>
                    <input value={descr} onChange={changeHandler} type="text" name="description" placeholder="description"/>

                    <label>Image</label>
                    <input value={image} onChange={changeHandler} type="text" name="image" placeholder="image"/>

                    <label>Shelter ID</label>
                    <input value={shelter_id} onChange={changeHandler} type="number" step="1" name="shelter_id" placeholder="shelter_id"/>

                    <input type="submit" value="Update Cat"/>

                </form>
            </section>
        </div>
    )
}

export default EditCatForm;
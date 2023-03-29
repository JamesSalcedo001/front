import {useState} from "react"

function EditCatForm({cats}) {
    const {name, age, breed, descr, image, shelter_id} = cats

    const [formData, setFormData] = useState(cats)

    return (
        <div>
            <section>
                <form>
                    <label>Name</label>
                    <input value={name} onChange={} type="text" name="name" placeholder="name"/>

                    <label>Breed</label>
                    <input value={breed} onChange={} type="text" name="breed" placeholder="breed"/>

                    <label>Age</label>
                    <input value={age} onChange={} type="text" name="age" placeholder="age"/>

                    <label>Description</label>
                    <input value={descr} onChange={} type="text" name="description" placeholder="description"/>

                    <label>Image</label>
                    <input value={image} onChange={} type="text" name="image" placeholder="image"/>

                    <label>Shelter ID</label>
                    <input value={shelter_id} onChange={} type="number" step="1" name="shelter_id" placeholder="shelter_id"/>

                    <button type="submit">Update Cat</button>

                </form>
            </section>
        </div>
    )
}

export default EditCatForm;
import {useState} from "react"
import {useHistory} from "react-router-dom"

function AddCatForm({addCat}) {

    const history = useHistory()

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        breed: "",
        descr: "",
        image: "",
        shelter_id: ""
    })

    function changeHandler(e) {
        const {name, value} = e.target
        setFormData((formDataObj) => ({...formDataObj, [name]:value}))
    }

    function submit(e) {
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({...formData}),
        }

        fetch("http://localhost:9292/cats", configObj)
        .then((res) => res.json())
        .then((newCat) => {
            addCat(newCat)
            setFormData({
                name: "",
                age: "",
                breed: "",
                descr: "",
                image: "",
                shelter_id: ""
            })
            history.push("/cats")
        })
    }


    return (
        <div>
            <section>
                <form onSubmit={submit}>
                    <label htmlFor="name">Cat Name</label>
                    <input type="text" name="name" value={formData.name} onChange={changeHandler} placeholder="name" />

                    <label htmlFor="breed">Cat Breed</label>
                    <input type="text" name="breed" value={formData.breed} onChange={changeHandler} placeholder="breed" />

                    <label htmlFor="age">Cat Age</label>
                    <input type="text" name="age" value={formData.age} onChange={changeHandler} placeholder="age"/>

                    <label htmlFor="descr">Cat Description</label>
                    <input type="text" name="descr" value={formData.descr} onChange={changeHandler} placeholder="description"/>

                    <label htmlFor="image">Cat IamgeURL</label>
                    <input type="text" name="image" value={formData.image} onChange={changeHandler} placeholder="image"/>

                    <label htmlFor="shelter_id">Closest Shelter</label>
                    <input type="number" step="1" name="shelter_id" value={formData.shelter_id} onChange={changeHandler} placeholder="shelter_id"/>

                    <button type="submit">Add Cat</button>
                </form>
            </section>
        </div>
    )
}

export default AddCatForm;
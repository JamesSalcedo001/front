import {useState} from "react"
import {useHistory} from "react-router-dom"

function AddCatForm({addCat, shelters}) {
    const [formData, setFormData] = useState({
        cat_name: "",
        age: "",
        breed: "",
        descr: "",
        cat_image: "",
        shelter_id: "",
    })

    const history = useHistory()


    function changeHandler(e) {
        const {name, value} = e.target
        setFormData((formDataObj) => ({...formDataObj, [name]:value}))
    }

    function submitCatForm(e) {
        e.preventDefault()

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch("http://localhost:9292/cats", configObj)
        .then((res) => res.json())
        .then((newCat) => {
            addCat(newCat)
            setFormData({
                cat_name: "",
                age: "",
                breed: "",
                descr: "",
                cat_image: "",
                shelter_id: "",
            })
            history.push("/")
        })
    }


    const shelterList = shelters.map(shelter =>
        <option key={shelter.id} value={shelter.id}>{shelter.name}</option>
        )



    return (
        <div>
            <section>
                <form className="formStyle" onSubmit={submitCatForm}>
                    <label htmlFor="name">Cat Name</label>
                    <input className="formInput" type="text" name="cat_name" value={formData.cat_name} onChange={changeHandler} placeholder="name" />

                    <label htmlFor="breed">Cat Breed</label>
                    <input className="formInput" type="text" name="breed" value={formData.breed} onChange={changeHandler} placeholder="breed" />

                    <label htmlFor="age">Cat Age</label>
                    <input className="formInput" type="number" name="age" value={formData.age} onChange={changeHandler} placeholder="age"/>

                    <label htmlFor="descr">Cat Description</label>
                    <input className="formInput" type="text" name="descr" value={formData.descr} onChange={changeHandler} placeholder="description"/>

                    <label htmlFor="image">Cat ImageURL</label>
                    <input className="formInput" type="text" name="cat_image" value={formData.cat_image} onChange={changeHandler} placeholder="image"/>

                    <label htmlFor="shelter_id">Closest Shelter</label>
                    <select className="formInput" name="shelter_id" value={formData.shelter_id} onChange={changeHandler}>{shelterList}</select>
                    
                    <input className="formInput" type="submit" value="Add Cat"/>
                </form>
            </section>
        </div>
    )
}

export default AddCatForm;
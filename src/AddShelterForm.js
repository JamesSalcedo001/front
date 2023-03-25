import {useState} from "react"

function AddShelterForm() {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        employees: "",
        image: ""
    })

    function changeHandler() {
        const {name, value} = e.target
        setFormData((formDataObj) => ({...formDataObj, [name]:value }))
    }

    return (
        <div>
            <form>
                <label htmlFor="name"></label>
                <input onChange={changeHandler} value={formData.name} placeholder="shelter name"/>

                <label htmFor="location"></label>
                <input onChange={changeHandler} value={formData.location} placeholder="shelter location"/>

                <label htmlFor="employees"></label>
                <input onChange={changeHandler} value={formData.employees} placeholder="number of employees"/>

                <label htmlFor="image"></label>
                <input onChange={changeHandler} value={formData.image} placeholder="shelter image"/>

                <button type="submit">Add Shelter</button>
            </form>
        </div>
    )
}

export default AddShelterForm;
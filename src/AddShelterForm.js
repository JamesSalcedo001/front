import {useState} from "react"
import {useHistory} from "react-router-dom"

function AddShelterForm({addShelter}) {

    const [formData, setFormData] = useState({
        name: "",
        location: "",
        employees: "",
        image: ""
    })

    const history = useHistory()


    function changeHandler(e) {
        const {name, value} = e.target
        setFormData((formDataObj) => ({...formDataObj, [name]:value }))
    }


    function submitShelterForm(e) {
        e.preventDefault()

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }

        fetch("http://localhost:9292/shelters", configObj)
        .then((res) => res.json())
        .then((newShelter) => {
            addShelter(newShelter)
            setFormData({
                name: "",
                location: "",
                employees: "",
                image: ""
            })
            history.push("/shelters")
        })
    }


    return (
        <div>
            <form className="formStyle" onSubmit={submitShelterForm}>
                <label htmlFor="name">Shelter Name</label>
                <input className="formInput" type="text" name="name" onChange={changeHandler} value={formData.name} placeholder="shelter name"/>

                <label htmlFor="location">Shelter Location</label>
                <input className="formInput" type="text" name="location" onChange={changeHandler} value={formData.location} placeholder="shelter location"/>

                <label htmlFor="employees">Number of Employees</label>
                <input className="formInput" type="number" name="employees" onChange={changeHandler} value={formData.employees} placeholder="number of employees"/>

                <label htmlFor="image">Shelter Image</label>
                <input className="formInput" type="text" name="image" onChange={changeHandler} value={formData.image} placeholder="shelter image" alt={formData.name}/>

                <input className="formInput" type="submit" value="Add Shelter"/>
            </form>
        </div>
    )
}

export default AddShelterForm;
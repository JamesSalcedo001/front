import {useState} from "react"
import {useHistory} from "react-router-dom"

function AddShelterForm({addShelter}) {

    const history = useHistory()

    const [formData, setFormData] = useState({
        name: "",
        location: "",
        employees: "",
        image: ""
    })

    function changeHandler(e) {
        const {name, value} = e.target
        setFormData((formDataObj) => ({...formDataObj, [name]:value }))
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
            <form className="formStyle" onSubmit={submit}>
                <label htmlFor="name">Shelter Name</label>
                <input onChange={changeHandler} value={formData.name} placeholder="shelter name"/>

                <label htmFor="location">Shelter Location</label>
                <input onChange={changeHandler} value={formData.location} placeholder="shelter location"/>

                <label htmlFor="employees">Number of Employees</label>
                <input onChange={changeHandler} value={formData.employees} placeholder="number of employees"/>

                <label htmlFor="image">Shelter Image</label>
                <input onChange={changeHandler} value={formData.image} placeholder="shelter image" alt={formData.name}/>

                <input type="submit" value="Add Shelter"/>
            </form>
        </div>
    )
}

export default AddShelterForm;
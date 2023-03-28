function EditCatForm() {
    return (
        <div>
            <section>
                <form>
                    <label>Name</label>
                    <input value={} onChange={} type="text" name="name" placeholder=""/>

                    <label>Breed</label>
                    <input value={} onChange={} type="text" name="breed" placeholder=""/>

                    <label>Age</label>
                    <input value={} onChange={} type="text" name="age" placeholder=""/>

                    <label>Description</label>
                    <input value={} onChange={} type="text" name="description" placeholder=""/>

                    <label>Image</label>
                    <input value={} onChange={} type="text" name="image" placeholder=""/>

                    <label>Shelter ID</label>
                    <input value={} onChange={} type="text" name="shelter_id" placeholder=""/>

                    <button type="submit">Update Cat</button>

                </form>
            </section>
        </div>
    )
}

export default EditCatForm;
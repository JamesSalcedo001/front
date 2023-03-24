import {NavLink} from "react-router-dom"
function Header() {
    return (
        <header>
            <nav>
                <h1>Kitty Shelter</h1>
                <NavLink exact to="/cats">Cats</NavLink>
                <NavLink exact to="/addcatform">Add Cats</NavLink>
                <NavLink exact to="/addshelterform">Add Shelters</NavLink>
                <NavLink exact to="/shelters">Shelters</NavLink>
            </nav>
        </header>
    )
}

export default Header
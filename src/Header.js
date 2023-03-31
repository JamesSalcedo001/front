import {NavLink} from "react-router-dom"
function Header() {
    return (
        <header>
            <nav id="headerSection">
                <h1 id="title">🐈  Kitty Shelter 🏠</h1>
                <NavLink className="navButtons" exact to="/">Cats List 🐈 </NavLink>
                <NavLink className="navButtons" exact to="/addcatform">Add Cats</NavLink>
                <NavLink className="navButtons" exact to="/addshelterform">Add Shelters</NavLink>
                <NavLink className="navButtons" exact to="/shelters">Shelters 🏠</NavLink>
            </nav>
        </header>
    )
}

export default Header
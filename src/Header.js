import {NavLink} from "react-router-dom"
function Header() {
    return (
        <header>
            <nav id="headerSection">
                <h1 id="title">🐈  Kitty Shelter 🏠</h1>
                <NavLink className="navButtons" exact to="/">Cats List 🐈 </NavLink>
                <NavLink className="navButtons" exact to="/add_cat">Add Cats</NavLink>
                <NavLink className="navButtons" exact to="/add_shelter">Add Shelters</NavLink>
                <NavLink className="navButtons" exact to="/shelters">Shelters 🏠</NavLink>
            </nav>
        </header>
    )
}

export default Header
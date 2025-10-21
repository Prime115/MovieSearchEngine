import {Link} from "react-router-dom";

function NavBar() {
    return <nav className="navbar">
        <div classame ="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div classame ="navbar-links">
            <Link to ="/" className="nav-link">Home</Link>
            <Link to ="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}
export default NavBar;
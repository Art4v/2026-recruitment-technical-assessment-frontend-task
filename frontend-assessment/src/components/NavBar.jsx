import { Link } from "react-router-dom"

function NavBar() {
    return <nav className="navbar">
      <div className="navbar-brand">
				<Link to="/">Freerooms</Link>
			</div>
      <div className="navbar-links">
				<Link to="/" className="nav-link">Search</Link>
				<Link to="/" className="nav-link">All Rooms</Link>
				<Link to="/" className="nav-link">Free Rooms</Link>
				<Link to="/" className="nav-link">Map</Link>
				<Link to="/" className="nav-link">Dark Mode</Link> 
      </div>
    </nav>
}

export default NavBar
import {Link} from "react-router-dom";
import './Navbar.css'

export default function NavBar() {
    return(
        <nav className="navbar">
            <ul>
                <li><Link to='/' className="link">Home</Link></li>
            </ul>
        </nav>
    )
}
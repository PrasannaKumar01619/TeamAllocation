import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-light navbar-expand-lg" style={{ backgroundColor: "blanchedalmond" }}>
        
            <ul class="navbar-nav ">
                <li class="nav-item">
                    <Link className="nav-link" to="/" style={{color:"darkblue",fontWeight:"bolder"}}>Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link " to="/CustomizedTables" style={{color:"darkblue",fontWeight:"bolder"}}>Teams</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Nav;
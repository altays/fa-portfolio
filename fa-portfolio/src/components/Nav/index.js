import { Link } from "react-router-dom";

function Nav() {

    return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/stocks">Stocks</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Nav;
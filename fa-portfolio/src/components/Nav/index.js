import { Link } from "react-router-dom";

function Nav() {

    return (
    <nav>
        <ul>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/music">Music</Link>
            </li>
            <li>
                <Link to="/podcast">Podcast</Link>
            </li>
            <li>
                <Link to="/video">Video</Link>
            </li>
            <li>
                <Link to="/store">Store</Link>
            </li>
 
        </ul>
    </nav>
    )
}

export default Nav;
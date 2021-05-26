import { Link } from "react-router-dom";
import './script'

// <i class="fas fa-bars"></i> bars icon for burger

function Nav() {

    return (

    <nav className="navbar" role="navigation" aria-label="main-navigation">

            {/* need to make the text bigger, spread the entries out more */}
    
                <a className="navbar-item dropdown-item" href="/">
                    <Link to="/">About</Link>
                </a>

                <a className="navbar-item dropdown-item" href="/sound">
                    <Link to="/sound">Sound</Link>
                </a>

                <a className="navbar-item brand" href="/">
                    <Link to="/">French Alexander</Link>
                </a>

                <a className="navbar-item dropdown-item" href="/video">
                    <Link to="/video">Video</Link>
                </a>

                {/* <a className="navbar-item" href="/programming">
                    <Link to="/programming">Programming</Link>
                </a> */}

                {/* <a className="navbar-item" href="store">
                    <Link to="/store">Store</Link>
                </a> */}

                <a className="navbar-item dropdown-item" href="mailto:frenchalexander@gmail.com">
                    <span className="email-icon">
                        <i className="fas fa-envelope fa-lg"></i>
                    </span>
                </a>


    
    </nav>


    )
}

export default Nav;
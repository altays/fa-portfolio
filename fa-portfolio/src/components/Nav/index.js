import { Link } from "react-router-dom";
import './script'

// <i class="fas fa-bars"></i> bars icon for burger

// consider converting the unordered list into a component to reuse?

function Nav() {

    return (

        <nav className="navbar" role="navigation" aria-label="main-navigation">

            <div className = "nav-large">

                {/* add a class here that will determine if this shows */}
                <div className = "navlist-large">

                    <a className="navbar-item " href="/">
                        <Link to="/">About</Link>
                    </a>

                    <a className="navbar-item " href="/sound">
                        <Link to="/sound">Sound</Link>
                    </a>

                    <a className="navbar-item" href="/">
                        <Link to="/">Brand</Link>
                    </a>

                    <a className="navbar-item " href="/video">
                        <Link to="/video">Video</Link>
                    </a>

                    {/* <a className="navbar-item" href="/programming">
                        <Link to="/programming">Programming</Link>
                    </a> */}

                    {/* <a className="navbar-item" href="store">
                        <Link to="/store">Store</Link>
                    </a> */}

                    <a className="navbar-item " href="mailto:frenchalexander@gmail.com">
                        <span className="email-icon">
                            <i className="fas fa-envelope fa-lg"></i>
                        </span>
                    </a>

                </div>

            </div>

            {/* create a menu for mobile - brand at top, burger on side, clicking on burger drops down a div */}

            <div className = "nav-small">
                <div className="nav-small-brand">
                    {/* after clicking, change nav-list to display and animate downward */}

                    <a className="brand" href="/">
                        <Link to="/">Brand</Link>
                    </a>
                </div>
                
                <div className = "navlist-small">

                    <a className="navbar-item " href="/" >
                        <Link to="/">About</Link>
                    </a>

                    <a className="navbar-item " href="/sound">
                        <Link to="/sound">Sound</Link>
                    </a>

                    <a className="navbar-item " href="/video">
                        <Link to="/video">Video</Link>
                    </a>

                    <a className="navbar-item " href="mailto:frenchalexander@gmail.com">
                        <span className="email-icon">
                            <i className="fas fa-envelope fa-lg"></i>
                        </span>
                    </a>

                </div>
            </div>
    
        </nav>

    )
}

export default Nav;
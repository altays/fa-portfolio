import { Link } from "react-router-dom";
import './script'

function Nav() {

    return (
    <nav className="navbar" role="navigation" aria-label="main-navigation">
    
        <div className="navbar-brand">
            <a className="navbar-item" href="/" id="top-of-page">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=""/>
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="#dropdown">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    
        <div id="navbarBasicExample" className="navbar-menu">
            {/* need to make the text bigger, spread the entries out more */}
            <div className="navbar-end is-size-5">
                <a className="navbar-item" href="/">
                    <Link to="/">About</Link>
                </a>

                <a className="navbar-item" href="/music">
                    <Link to="/music">Music</Link>
                </a>

                <a className="navbar-item" href="/podcast">
                    <Link to="/podcast">Podcast</Link>
                </a>

                <a className="navbar-item" href="/video">
                    <Link to="/video">Video</Link>
                </a>

                <a className="navbar-item" href="/programming">
                    <Link to="/programming">Programming</Link>
                </a>

                {/* <a className="navbar-item" href="store">
                    <Link to="/store">Store</Link>
                </a> */}

                <a className="navbar-item" href="mailto:frenchalexander@gmail.com">
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
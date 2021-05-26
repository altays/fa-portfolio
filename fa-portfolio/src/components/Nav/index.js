import { Link } from "react-router-dom";
import './script'

function Nav() {

    return (
    <nav className="" role="navigation" aria-label="main-navigation">

    
        <div >
            {/* need to make the text bigger, spread the entries out more */}
            <div >
                <a  href="/">
                    <Link to="/">About</Link>
                </a>

                <a  href="/sound">
                    <Link to="/sound">Sound</Link>
                </a>

                <a className="navbar-item" href="/">
                    <Link to="/">French Alexander (replace with logo)</Link>
                </a>

                <a href="/video">
                    <Link to="/video">Video</Link>
                </a>

                <a className="navbar-item" href="/programming">
                    <Link to="/programming">Programming</Link>
                </a>

                {/* <a className="navbar-item" href="store">
                    <Link to="/store">Store</Link>
                </a> */}

                {/* <a className="navbar-item" href="mailto:frenchalexander@gmail.com">
                    <span className="email-icon">
                        <i className="fas fa-envelope fa-lg"></i>
                    </span>
                </a> */}

            </div>

        </div>
    
    </nav>


    )
}

export default Nav;
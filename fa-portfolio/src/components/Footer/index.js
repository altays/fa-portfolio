function Footer() {

    return (

        // consider converting social links into a component to reuse in profile and footer
        <footer className="footer">
            <div className="socials">
 
                <a href="https://www.youtube.com/channel/UCKMdpQ2L60I-6koan9PV74w" className="socials-item">
                    <span >
                        <i className="fab fa-youtube fa-lg"></i>
                    </span>
                </a>
                <a href= "https://twitter.com/frenchatmusic" className="socials-item">
                    <span>
                        <i className="fab fa-twitter fa-lg"></i>
                    </span>
                </a>
                <a href= "https://www.instagram.com/frenchalexandersomething/" className="socials-item">
                    <span>
                        <i className="fab fa-instagram fa-lg"></i>
                    </span>
                </a>
                <a href= "https://www.twitch.tv/frenchalexander/" className="socials-item">
                    <span>
                        <i className="fab fa-twitch fa-lg"></i>
                    </span>
                </a>
                <a href= "https://frenchalexander.bandcamp.com/releases" className="socials-item">
                    <span>
                        <i className="fab fa-bandcamp fa-lg"></i>
                    </span>
                </a>
                <a href="mailto:frenchalexander@gmail.com" className="socials-item">
                    <span>
                        <i className="fas fa-envelope fa-lg"></i>
                    </span>
                </a>
            </div>
            <div className="return">
                <p >
                    <a className="return2top" href="#top-of-page">Return to top</a>
                </p>
            </div>
        </footer>

    )
}

export default Footer;
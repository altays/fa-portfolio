import React from 'react';

function Video() {
    return( 
        <section className="video-container">
            <p className = "video-text">
                French Alexander creates audiovisual ambient pieces

            </p>

            <div className="video-embed">
                <a href="#" className="video-link"><iframe width="290" height="280" src="https://www.youtube.com/embed/cvM9JekNgNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe></a>
                <a href="#" className="video-link"><iframe width="290" height="280" src="https://www.youtube.com/embed/nvAzH0ac2_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe></a>
                <a href="#" className="video-link"><iframe width="290" height="280" src="https://www.youtube.com/embed/aft0OaOdGjA?start=1469" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe></a>
            </div>

            <p className = "video-text">
                Check out videos like this and more on <a href="https://www.youtube.com/channel/UCKMdpQ2L60I-6koan9PV74w/videos">YouTube</a>.
            </p>

            

        </section>

        
    );
}

export default Video;
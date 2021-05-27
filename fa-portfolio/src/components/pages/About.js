import React from 'react';
import pic1 from './images/alex.jpg';
import pic2 from './images/alex@2x.jpg';
import pic3 from './images/alex@3x.jpg';
import pic4 from './images/alex@4x.jpg';

function About() {
    return (
    
        <div className="content" id="top-of-page">
            <aside className="side" >
                <figure className="picture">
                    <div className="picture-shadow"></div>
                    <img id="pictureImage" className="picture-image"
                    src={pic1}
                    srcSet={`${pic1} 1x,${pic2} 2x,${pic3} 3x,${pic4} 4x`}
                    alt="Portrait of Alex Taylor"
                    width="320"
                    height="320" />
                </figure>
            </aside>

            <div className="about">
                {/* <h1 className="name">
                    Hi, I'm Alex Taylor
                </h1> */}

                <div className="description">
                    <p className="descPara">
                        French Alexander is a Baltimore based electronic composer and performer who creates densly layered audiovisual landscapes. He was initially fascinated with using pedals to extend the sound of a guitar and continues this fascination with circuitbending, modular synths, and tape. He is also a cohost of the podcast <a href="https://podcasts.apple.com/us/podcast/feels-and-variations/id1501295351">Feels and Variations</a>.
                    </p>
                    <p className="descPara">
                        Comments on his recent improvisation for the Scavengers Network Indie Podcast Festival, which can be found on his YouTube channel, include: 
                    </p>
                    <ul> 
                        <li className="descList">
                            "… music that can make you feel like you’ve been ripped out of the ocean and then immediately gently placed into the top of a tree that’s swaying lightly in the breeze." 
                        </li>
                        <li className="descList">
                            "It exists in a weird space between calm and tension that's really difficult to nail down."
                        </li>
                        <li className="descList">
                            "YOURE USING THE CONVERSATION WE JUST HAD?" 
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        
    );
}

export default About;
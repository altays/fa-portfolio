import React from 'react';
import pic1 from './images/alex.jpg';
import pic2 from './images/alex@2x.jpg';
import pic3 from './images/alex@3x.jpg';
// import pic4 from 'images/alex@4x.jpg';

function About() {
    return (
    
        <div className="content" id="top-of-page">
            <aside className="side" >
                <figure className="picture">
                    <div className="picture-shadow"></div>
                    <img id="pictureImage" className="picture-image"
                    src={pic1}
                    srcSet={`${pic1} 1x,${pic2} 2x,${pic3} 3x`}
                    alt="Portrait of Alex Taylor"
                    width="320"
                    height="320" />
                </figure>
            </aside>

            <div className="about">
                <h1 className="name">
                    Hi, I'm Alex Taylor
                </h1>

                <div className="description">
                    <p>
                        I spend my time traveling the world,
                        helping startups and tech businesses
                        hire the best people.
                    </p>
                </div>

            </div>
        </div>
        
    );
}

export default About;
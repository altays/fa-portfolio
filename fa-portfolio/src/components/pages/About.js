import React from 'react';
import pic1 from './images/alex.jpg';
import pic2 from './images/alex@2x.jpg';
import pic3 from './images/alex@3x.jpg';
// import pic4 from 'images/alex@4x.jpg';

function About() {
    return (
    
        <div class="content" id="top-of-page">
            <aside class="side" >
                <figure class="picture">
                    <div class="picture-shadow"></div>
                    <img id="pictureImage" class="picture-image"
                    src={pic1}
                    srcset={`${pic1} 1x,${pic2} 2x,${pic3} 3x`}
                    alt="Portrait of Alex Taylor"
                    width="320"
                    height="320" />
                </figure>
            </aside>

            <div class="about">
                <h1 class="name">
                    Hi, I'm Alex Taylor
                </h1>

                <div class="description">
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
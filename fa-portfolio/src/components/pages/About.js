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
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisl sem, tempus non dolor ut, egestas venenatis velit. Integer pellentesque mauris maximus, dapibus sem ut, eleifend mauris. Aliquam suscipit ipsum sed augue vulputate, quis sollicitudin enim placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nibh tortor, faucibus a enim fermentum, tempor porttitor leo. Donec id ipsum efficitur, feugiat augue id, tristique quam. Aenean pretium urna sit amet quam scelerisque commodo. Maecenas tincidunt ex nisl, in convallis felis fringilla vitae. 
                    </p>
                </div>

            </div>
        </div>
        
    );
}

export default About;
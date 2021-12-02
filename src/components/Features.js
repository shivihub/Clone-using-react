import React from 'react';
import "./Features.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Features = () => {
    return (

        <div className="outer">
            <div className="feat"><h1>Features</h1></div>
            <div className="feature">
                <div className= "box box1 " />
                <div className= "box box2" >
                    <div className="contact contact1">
                        <div className="insta"><InstagramIcon fontSize="large"/></div>
                        <div>Instagram</div>
                    </div>
                    

                    <div className="contact contact2">
                        <div className="insta"><YouTubeIcon fontSize="large"/></div>
                        <div>Youtube</div>
                    </div>

                    <div className="contact contact3">
                        <div className="insta"><FacebookIcon fontSize="large"/></div>
                        <div>Facebook</div>
                    </div>

                    <div className="contact contact4">
                        <div className="insta"><TwitterIcon fontSize="large"/></div>
                        <div>Twitter</div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Features;

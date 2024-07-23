import React from 'react'
import Mentor1 from '../assets/Rectangle1.png'

const Mentor = () => {
    return (
        <div>


            <div>
                <img src={Mentor1} />

                <div>

                    <p>Case Study</p>
                    <p>Journey to $ 100K with CCL</p>
                    <button>Read Story</button>
                </div>
            </div>
            <div>
                <p>What is Mentor Connect</p>
                <p>Get access to 1-on-1 mentorship sessions</p>
                <p>Get Access to one-on-one mentorship sessions to accelerate your journey with sector-specific (health tech, ed-tech etc) & cross sector (marketing, branding, legal services etc.) vetted experts.</p>
                <div>
                    <button>Find Mentor</button>
                    <button>Become Mentor</button>
                </div>

            </div>


        </div>
    )
}

export default Mentor;

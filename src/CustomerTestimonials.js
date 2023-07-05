import React from 'react';

import UserLucas from '../src/assets/images/user_lucas.png';
import UserMaria from '../src/assets/images/user_maria.jpg';
import UserJane from '../src/assets/images/user_jane.png';
import UserAndrew from '../src/assets/images/user_andrew.png';
//import Star from '../src/assets/images/star.png'


function TestimonialsSection (){
    return(
        <div className="TestimonialContainer">
            <h2>Testimonials</h2><br/>
            <div className="TestimonialCardsContainer">
                <div className="TestimonialCard">
                    <h4>Rating</h4>
                    <div className='TestimonialCardInfo'>
                        <img alt="user Lucas" src={UserLucas} />
                        <h4>Lucas</h4>
                    </div>
                    <spam>Delicious food and exceptional service</spam>
                </div>
                <div className="TestimonialCard">
                    <h4>Rating</h4>
                    <div className='TestimonialCardInfo'>
                        <img alt="user Maria" src={UserMaria}/>
                        <h4>Maria</h4>
                    </div>
                    <spam>The best in the neighborhood</spam>
                </div>
                <div className="TestimonialCard">
                    <h4>Rating</h4>
                    <div className='TestimonialCardInfo'>
                        <img alt="user Jane" src={UserJane} />
                        <h4>Jane</h4>
                    </div>
                    <spam>Great place to celebrate!</spam>
                </div>
                <div className="TestimonialCard">
                    <h4>Rating</h4>
                    <div className='TestimonialCardInfo'>
                        <img alt="user Andrew" src={UserAndrew} />
                        <h4>Andrew</h4>
                    </div>
                    <spam>Good food and good service!</spam>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsSection
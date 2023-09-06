import React from 'react';
import Apple from '../img/appleLogo.png';
import Star from '../img/star.png'
const Intro = () => {
    return (
        <div className='intro'>
            <div className='headingContainer'>
                <p id='text1'>Ahead app</p>
                <div className='heading'>Master your life by mastering emotions</div>
                <div className='ratingContainer'>
                    <div className='storeLogo'>
                        <img src={Apple} alt=''/>
                        <div>
                            <p>Download on the</p>
                            <span>App Store</span>
                        </div>
                    </div>
                    <div className='stars'>
                        {[0, 1, 2, 3, 4].map((level) => (
                            <img src={Star} alt=''/>
                        ))}
                        <div>100+ AppStore reviews</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;

import React from 'react';
import Intro from './Intro';
import BeatsIQ from './BeatsIQ';
import Built from './Built';

const Home = () => {
    return (
        <div className='home'>
            <Intro/>
            <BeatsIQ/>
            <Built/>
        </div>
    );
}

export default Home;

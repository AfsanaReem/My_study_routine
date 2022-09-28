import React from 'react';
import Body from '../Body/Body';
import Side from '../Side/Side';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='body-container'>
                <Body></Body>
            </div>
            <div className='side-container'>
                <Side></Side>
            </div>

        </div>
    );
};

export default Home;
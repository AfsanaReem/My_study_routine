import React from 'react';
import './Side.css'

const Side = () => {
    return (
        <div className='side-component'>
            <div className='my-info'>
                <img src='favicon.ico'></img>
                <h4>Afsana Rahman <small>Computer Engineer</small></h4>
            </div>
            <div className='credit-info'>
                <h4>136 <small>Credit</small></h4>
                <h4>3.06 <small>CGPA</small></h4>
                <h4>4 <small>Years</small></h4>
            </div>

        </div>
    );
};

export default Side;
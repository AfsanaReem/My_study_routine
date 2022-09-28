import React from 'react';
import './Side.css'

const Side = () => {
    return (
        <div className='side-component'>
            <div className='my-info'>
                <img src='favicon.ico'></img>
                <h4>Afsana Rahman <small>BSc in CSE</small></h4>
            </div>
            <div className='credit-info'>
                <h4>136 <small>Credit</small></h4>
                <h4>3.06 <small>CGPA</small></h4>
                <h4>4 <small>Years</small></h4>
            </div>
            <h3>Add A Break</h3>
            <div className='break'>
                <button>10min</button>
                <button>20min</button>
                <button>30min</button>
                <button>40min</button>
            </div>
            <h3>Study Details</h3>
            <h4 className='header4'>Study Time: { }min</h4>
            <h4 className='header4'>Break Time: { }min</h4>
            <button className='toast-button'>Study Complete</button>
        </div>
    );
};

export default Side;
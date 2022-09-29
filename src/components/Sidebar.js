import React, { useState } from 'react';
import { addTimeToDB } from '../database/localdb';
import './Sidebar.css'
const Sidebar = ({ addedTime }) => {
    const [breakTime, setBreakTime] = useState(0);
    const breakButton = time => {
        setBreakTime(time);
        addTimeToDB(time);
    }
    return (
        <div className='side-component'>
            <div className='my-info'>
                <img src='women.png' alt=''></img>
                <h4>Afsana Rahman <small>BSc in CSE</small></h4>
            </div>
            <div className='credit-info'>
                <h4>136 <small>Credit</small></h4>
                <h4>3.06 <small>CGPA</small></h4>
                <h4>4 <small>Years</small></h4>
            </div>
            <h3>Add A Break</h3>
            <div className='break'>
                <button onClick={() => breakButton(10)}>10min</button>
                <button onClick={() => breakButton(20)}>20min</button>
                <button onClick={() => breakButton(30)}>30min</button>
                <button onClick={() => breakButton(40)}>40min</button>
            </div>
            <h3>Study Details</h3>
            <h4 className='header4'>Study Time: {addedTime}hr</h4>
            <h4 className='header4'>Break Time: {breakTime}min</h4>
            <button className='toast-button'>Study Complete</button>
        </div>
    );
};

export default Sidebar;